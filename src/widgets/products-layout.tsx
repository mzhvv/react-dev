import { Link, Outlet } from 'react-router'
import { Button } from '@/shared/ui/button'

const LINKS = [{ to: '/cms-products', label: 'cms-products' }]

export const ProductsLayout: React.FC = () => {
  return (
    <>
      <header>
        <nav className='flex justify-center gap-3'>
          {LINKS.map(link => (
            <Button key={link.to} asChild variant='link2' size='default2'>
              <Link to={link.to}>{link.label}</Link>
            </Button>
          ))}
        </nav>
      </header>
      <Outlet />
    </>
  )
}
