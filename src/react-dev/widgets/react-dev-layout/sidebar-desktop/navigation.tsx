// src/react-dev/widgets/react-dev-layout/sidebar/navigation.tsx

import { Link } from 'react-router'

import type { NavigationLink, NavigationSection } from '@global/libs/navigation'
import { NAVIGATION_SECTIONS_FOR_SIDEBAR } from '@global/libs/navigation'

import { Button } from '@ui/components/button'
import { DotIcon } from 'lucide-react'
import { Label2 } from '@ui/components/label-2'

export const Navigation = () => {
  return <NavigationList navigationSections={NAVIGATION_SECTIONS_FOR_SIDEBAR} />
}

export const NavigationList: React.FC<{ navigationSections: NavigationSection[] }> = ({
  navigationSections,
}) => {
  return (
    <ul className='p-2'>
      {navigationSections.map(sections => (
        <li key={sections.title} className='p-2'>
          <Label2 asChild className='px-3'>
            <h3>{sections.title}</h3>
          </Label2>
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
      <Button asChild variant='ghost' size='sm-full'>
        <Link to={link.path}>
          {('icon' in link && link.icon && <link.icon />) || <DotIcon />}
          {link.title}
        </Link>
      </Button>
    </li>
  )
}
