// src/widgets/layouts/redux-cards-layout.tsx

import { REDUX_CARDS_PATHS } from '@/shared/router'
import { Button } from '@/shared/ui/button'
import { Link, Outlet } from 'react-router'

const PREFIX = 'drafts/cards'
const LINKS = [
  { to: `/${PREFIX}/req-comp`, label: 'cards-req-comp' },
  { to: `/${PREFIX}/thunk`, label: 'thunk' },
  { to: `/${PREFIX}/no-req`, label: 'cards-no-req' },
]

export const ReduxCardsLayout = () => {
  return (
    <>
      <div>
        <h1>redux-cards</h1>
        <ul className='flex justify-center gap-3'>
          {REDUX_CARDS_PATHS.map(link => (
            <li key={link}>
              <Button asChild variant='link2' size='default2'>
                {/* <Link to={link.to}>{link.label}</Link> */}
                {link}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  )
}
