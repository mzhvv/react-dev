// src/react-dev/pages/react-dev-layout.tsx

import { useIsMobile } from '@ui/hooks/use-mobile'

import { DesktopSidebar } from '@react-dev/widgets/react-dev-layout/desktop/sidebar'
import { MobileSidebar } from '@react-dev/widgets/react-dev-layout/mobile/sidebar'

export const ReactDevLayout = () => {
  return (
    <SidebarControl>
      <GlobalLoadingFallback />
    </SidebarControl>
  )
}

const SidebarControl: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isMobile = useIsMobile()

  if (isMobile)
    return (
      <div className='[&>*:first-child]:min-h-[calc(100svh-57px)]'>
        {children}
        <MobileSidebar />
      </div>
    )

  return (
    <div className='flex [&>*:first-child]:shrink-0 [&>*:last-child]:grow'>
      <DesktopSidebar />
      {children}
    </div>
  )
}

//

import { useState, useEffect } from 'react'
import { useNavigation, Outlet } from 'react-router'
import { LoadingFallback } from '@ui/components/fallback'

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
