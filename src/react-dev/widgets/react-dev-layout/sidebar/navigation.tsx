// src/react-dev/widgets/react-dev-layout/sidebar/navigation.tsx

import { Link } from 'react-router'
import type { NavigationLink, NavigationSection } from '@global/libs/navigation'
import { Button } from '@ui/components/button'

import { NAVIGATION_SECTIONS_FOR_SIDEBAR } from '@global/libs/navigation'

export const Navigation = () => {
  return (
    <nav aria-label='navigation' className='flex-1'>
      <NavigationList navigationSections={NAVIGATION_SECTIONS_FOR_SIDEBAR} />
    </nav>
  )
}

export const NavigationList: React.FC<{ navigationSections: NavigationSection[] }> = ({
  navigationSections,
}) => {
  return (
    <ul className='p-2'>
      {navigationSections.map(sections => (
        <li key={sections.title} className='space-y-2 p-2'>
          <h3 className='text-sidebar-foreground/70 px-2 text-xs font-medium'>{sections.title}</h3>
          <ul>
            {sections.links.map(link => (
              <NavigationItem key={link.path} link={link} />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

const NavigationItem: React.FC<{ link: NavigationLink }> = ({ link }) => {
  return (
    <li>
      <Button asChild variant='ghost' size='sm' className='w-full justify-start px-2'>
        <Link to={link.path}>
          {'icon' in link && link.icon && <link.icon />}
          {link.title}
        </Link>
      </Button>
    </li>
  )
}
