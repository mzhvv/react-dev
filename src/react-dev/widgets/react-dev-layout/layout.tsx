// src/react-dev/widgets/react-dev-layout/layout.tsx

import { useState, useEffect } from 'react'
import { Outlet, useNavigation } from 'react-router'

import { useIsMobile } from '@ui/hooks'
import { LoadingFallback } from '@ui/components/fallback'

import { SidebarMobile } from './sidebar-mobile'
import { SidebarDesktop } from './sidebar-desktop'

export const ReactDevLayout = () => {
  return (
    <SidebarControl>
      <GlobalLoadingFallback />
    </SidebarControl>
  )
}

const GlobalLoadingFallback = () => {
  const { state } = useNavigation()
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    // Срабатывает ТОЛЬКО при клиентской навигации
    if (state === 'loading') {
      const timer = setTimeout(() => setShowLoading(true), 150)
      return () => clearTimeout(timer)
    } else {
      setShowLoading(false)
    }
  }, [state])

  // Показываем loading только если прошло >150ms
  if (state === 'loading' && showLoading) {
    return <LoadingFallback message='Loading page ...' />
  }

  return <Outlet />
}

const SidebarControl: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isMobile = useIsMobile()

  if (isMobile)
    return (
      <div className='[&>*:first-child]:min-h-[calc(100svh-57px)]'>
        {children}
        <SidebarMobile />
      </div>
    )

  return (
    <div className='flex [&>*:first-child]:shrink-0 [&>*:last-child]:grow'>
      <SidebarDesktop />
      {children}
    </div>
  )
}
