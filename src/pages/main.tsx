import { Link } from 'react-router'

import { Button } from '@/shared/ui/button'
import { REDUX_CARDS_PATHS_OBJECTS } from '@/shared/router'

// prettier-ignore
const MAIN_NAVIGATION = [
  { title: 'drafts', links: [
    { to: '/drafts/counters', label: 'counters' },
    { to: REDUX_CARDS_PATHS_OBJECTS['thunk'].absolutePath, label: 'redux-card'}
  ]},
  { title: 'products', links: [
    { to: '/products/cms-products', label: 'cms-products' }
  ]},
]

export const MainPage = () => {
  return (
    <main className='space-y-6'>
      <nav className='space-y-3'>
        {MAIN_NAVIGATION.map(navigationItem => (
          <div key={navigationItem.title}>
            <h2>{navigationItem.title}</h2>
            <ul className='list-inside list-disc'>
              {navigationItem.links?.map(link => (
                <li key={link.to}>
                  <Button asChild variant='link2' size='default2'>
                    <Link to={link.to}>{link.label}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </main>
  )
}
