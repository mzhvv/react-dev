// src/host/pages/host-layout/index.tsx

import { useIsMobile } from '@packages/ui/shadcn/hooks/use-mobile'

import { DesktopSidebar } from '@host/widgets/main-layout/desktop/sidebar'
import { MobileSidebar } from '@host/widgets/main-layout/mobile/sidebar'

export const HostLayout = () => {
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
import { LoadingFallback } from '@packages/ui/components/fallback'

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
