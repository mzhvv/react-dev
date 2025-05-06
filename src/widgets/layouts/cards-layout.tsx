import { Button } from '@/shared/ui/button'
import { Link, Outlet } from 'react-router'

const PREFIX = 'drafts/cards'
const LINKS = [
  { to: `/${PREFIX}/req-comp`, label: 'cards-req-comp' },
  { to: `/${PREFIX}/req-func`, label: 'cards-req-func' },
  { to: `/${PREFIX}/no-req`, label: 'cards-no-req' },
]

export const CardsLayout = () => {
  return (
    <>
      <div>
        <ul className='flex justify-center gap-3'>
          {LINKS.map(link => (
            <li key={link.to}>
              <Button asChild variant='link2' size='default2'>
                <Link to={link.to}>{link.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  )
}
