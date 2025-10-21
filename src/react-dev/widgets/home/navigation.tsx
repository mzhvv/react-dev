// src/react-dev/widgets/home/navigation.tsx

import { Link } from 'react-router'

import type {
  NavigationLink,
  NavigationSection as NavigationSectionT,
} from '@global/libs/navigation'
import {
  NAVIGATION_SECTIONS_FOR_PAGE_1,
  NAVIGATION_SECTIONS_FOR_PAGE_2,
} from '@global/libs/navigation'

import { Section, SectionContent, SectionHeader } from '@ui/layout-system'
import { Button } from '@ui/components/button'
import { Label2 } from '@ui/components/label-2'

export const NavigationSection = () => {
  return (
    <Section>
      <SectionHeader>
        <h2>Навигация</h2>
      </SectionHeader>
      <SectionContent
      // className='max-w-107' // 45 + 3 + 14
      >
        <nav className='space-y-4'>
          <NavigationGroup navigationSections={NAVIGATION_SECTIONS_FOR_PAGE_1} />
          <NavigationGroup navigationSections={NAVIGATION_SECTIONS_FOR_PAGE_2} />
        </nav>
      </SectionContent>
    </Section>
  )
}

const NavigationGroup: React.FC<{ navigationSections: NavigationSectionT[] }> = ({
  navigationSections,
}) => {
  return (
    <ul className='flex justify-center gap-3'>
      {navigationSections.map(sections => (
        <li key={sections.title}>
          <Label2 asChild className='px-3'>
            <h3>{sections.title}</h3>
          </Label2>
          <ul className='w-45'>
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
          {'icon' in link && link.icon && <link.icon />}
          {link.title}
        </Link>
      </Button>
    </li>
  )
}
