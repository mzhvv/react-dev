import { Link, Outlet } from 'react-router'
import { Button } from '@/shared/ui/button'

export const AppLayout: React.FC = () => {
  return (
    <div className='p-6 space-y-3 max-w-screen-xl mx-auto'>
      <header>
        <Button asChild variant='link2' size='default2'>
          <Link to='/'>react-dev</Link>
        </Button>
      </header>
      <Outlet />
    </div>
  )
}
