import { Link, Outlet } from 'react-router'

import { Button } from '@/shared/ui/button'
import reactLogo from '@/shared/assets/react.svg'

export const AppLayout = () => {
  return (
    <div className='mx-auto max-w-screen-xl space-y-6 p-6 *:space-y-6'>
      <header className='h-6'>
        <Button asChild variant='link2' size='default2'>
          <Link to='/'>
            <img src={reactLogo} className='size-6' alt='React logo' />
            react-dev
          </Link>
        </Button>
      </header>
      <Outlet />
    </div>
  )
}
