import { Button } from '@/shared/ui/button'
import { Link } from 'react-router'

const LINKS = [{ to: 'cms-products', label: 'products' }]

export const MainPage: React.FC = () => {
  return (
    <nav>
      <ul className='list-inside list-disc'>
        {LINKS.map(link => (
          <li key={link.to}>
            <Button asChild variant='link2' size='default'>
              <Link to={link.to}>{link.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
