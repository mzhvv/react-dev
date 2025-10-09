// src/react-dev/widgets/home/navigation.tsx

import { Link } from 'react-router'

import type { NavigationLink, NavigationSections } from '@global/navigation'
import { Button } from '@ui/components/button'

import {
  NAVIGATION_SECTIONS_FOR_PAGE_1,
  NAVIGATION_SECTIONS_FOR_PAGE_2,
} from '@react-dev/shared/global/navigation'

export const Navigation = () => {
  return (
    <>
      <section>
        <NavigationList navigationSections={NAVIGATION_SECTIONS_FOR_PAGE_1} />
      </section>
      <section>
        <NavigationList navigationSections={NAVIGATION_SECTIONS_FOR_PAGE_2} />
      </section>
    </>
  )
}

export const NavigationList: React.FC<{ navigationSections: NavigationSections }> = ({
  navigationSections,
}) => {
  return (
    <ul className='flex justify-center gap-4'>
      {navigationSections.map(sections => (
        <li key={sections.title} className='space-y-2'>
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
      <Button asChild variant='ghost' size='sm'>
        <Link to={link.path}>
          {'icon' in link && link.icon && <link.icon />}
          {link.title}
        </Link>
      </Button>
    </li>
  )
}
