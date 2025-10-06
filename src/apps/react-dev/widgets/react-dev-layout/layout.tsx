import { Outlet } from 'react-router'

import { ReactDevSidebar } from './sidebar'

export const ReactDevLayout = () => {
  return (
    <>
      <div className='flex [&>*:last-child]:flex-1'>
        <ReactDevSidebar />
        <Outlet />
      </div>
    </>
  )
}
