// src/react-dev/shared/global/libs/navigation/ui/render-data.tsx

import { Link } from 'react-router'
import { DotIcon } from 'lucide-react'

import type { NavigationLink, NavigationSection } from '@global/libs/navigation'

import { cn } from '@ui/lib'
import { Button } from '@ui/components/button'
import { Label2 } from '@ui/components/label-2'
import { DialogClose } from '@ui/components/dialog'

type Variant = 'sidebar' | 'modal' | 'page'
type Orientation = 'horizontal' | 'vertical'

export const NavigationDataRender: React.FC<{
  navigationSections: NavigationSection[]
  variant: Variant
  orientation: Orientation
  size?: string
}> = ({ navigationSections, variant, orientation = 'vertical', size }) => {
  return (
    <ul
      className={cn(
        orientation === 'vertical'
          ? 'flex flex-col'
          : 'flex flex-col justify-center gap-3 sm:flex-row'
      )}
    >
      {navigationSections.map(sections => (
        <li key={sections.title} className={cn(orientation === 'vertical' ? 'py-2' : 'p-0')}>
          <Label2 asChild>
            <h3>{sections.title}</h3>
          </Label2>
          <ul className={cn('space-y-px', size ? size : 'w-auto')}>
            {sections.links.map(link => (
              <NavigationItem key={link.path} {...{ variant, link }} />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

const NavigationItem: React.FC<{ variant: Variant; link: NavigationLink }> = ({
  variant,
  link,
}) => {
  switch (variant) {
    case 'sidebar':
      return <NavigationItemSidebar key={link.path} link={link} />
    case 'modal':
      return <NavigationItemModal key={link.path} link={link} />
    case 'page':
      return <NavigationItemPage key={link.path} link={link} />
  }
}
const NavigationItemSidebar: React.FC<{ link: NavigationLink }> = ({ link }) => {
  return (
    <li>
      <Button asChild variant='ghost' size='sidebar-sm'>
        <Link to={link.path}>
          {('icon' in link && link.icon && <link.icon />) || <DotIcon />}
          {link.title}
        </Link>
      </Button>
    </li>
  )
}

const NavigationItemModal: React.FC<{ link: NavigationLink }> = ({ link }) => {
  return (
    <li>
      <DialogClose asChild>
        <Button asChild variant='ghost' size='sidebar-sm'>
          <Link to={link.path}>
            {('icon' in link && link.icon && <link.icon />) || <DotIcon />}
            {link.title}
          </Link>
        </Button>
      </DialogClose>
    </li>
  )
}

const NavigationItemPage: React.FC<{ link: NavigationLink }> = ({ link }) => {
  return (
    <li>
      <Button asChild variant='ghost' size='sidebar-sm'>
        <Link to={link.path}>
          {'icon' in link && link.icon && <link.icon />}
          {link.title}
        </Link>
      </Button>
    </li>
  )
}
