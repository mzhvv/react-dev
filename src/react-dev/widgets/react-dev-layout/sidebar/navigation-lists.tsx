import { Link } from 'react-router'

import { Button } from '@ui/components'
import { type NavigationSections } from '@navigation'

export const SidebarReactDevNavigationLists: React.FC<{
  navigationSections: NavigationSections
}> = ({ navigationSections }) => {
  return navigationSections.map(object => (
    <div key={object.key} className='p-2'>
      <div
        className='text-sidebar-foreground/70 flex h-7 items-center px-2 text-xs'
        // tracking-[-0.010em]
      >
        {object.title}
      </div>
      <ul>
        {object.links.map(link => (
          <li key={link.path}>
            <Button asChild variant='ghost' size='sidebar'>
              <Link to={link.path}>
                {'icon' in link && link.icon && <link.icon />}
                {link.title}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  ))
}
