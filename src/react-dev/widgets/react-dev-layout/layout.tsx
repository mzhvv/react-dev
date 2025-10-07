import { Outlet } from 'react-router'

import { SidebarReactDev } from './sidebar'

export const ReactDevLayout = () => {
  return (
    <>
      <div className='flex [&>*:last-child]:flex-1'>
        <SidebarReactDev />
        <Outlet />
      </div>
    </>
  )
}
