// src/widgets/layouts/redux-cards-layout.tsx

import { Link, Outlet } from 'react-router'

import { REDUX_CARDS_PATHS_MAP } from '@/shared/router'
import { Button } from '@/shared/ui/button'

export const ReduxCardsLayout = () => {
  return (
    <>
      <div>
        <h1>redux-cards</h1>
        <ul className='flex justify-center gap-3'>
          {REDUX_CARDS_PATHS_MAP.map(([key, path]) => (
            <li key={key}>
              <Button asChild variant='link2' size='default2'>
                <Link to={path.absolutePath}>{path.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  )
}
