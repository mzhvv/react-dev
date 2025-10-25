import { Outlet } from 'react-router'

import { useIsMobile } from '@ui/hooks'

import { SidebarMobile } from './sidebar-mobile'
import { SidebarDesktop } from './sidebar-desktop'

export const ReactDevLayout = () => {
  return (
    <SidebarControl>
      <Outlet />
    </SidebarControl>
  )
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
