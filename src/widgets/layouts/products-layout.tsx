import { Link, Outlet } from 'react-router'
import { Button } from '@/shared/ui/button'

const PREFIX = '/products'
const PRODUCTS_LINKS = [{ to: `${PREFIX}/cms-products`, label: 'cms-products' }]

export const ProductsLayout = () => {
  return (
    <>
      <nav className='flex justify-center gap-3'>
        {PRODUCTS_LINKS.map(link => (
          <Button key={link.to} asChild variant='link2' size='default2'>
            <Link to={link.to}>{link.label}</Link>
          </Button>
        ))}
      </nav>
      <Outlet />
    </>
  )
}
