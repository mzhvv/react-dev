// src/widgets/app/header.tsx

import { Container, Separator } from '@/shared/ui'

import { Breadcrumbs } from './breadcrumb'

export const AppHeader: React.FC = () => {
  return (
    <Container.Component
      asElement='header'
      className='px-application bg-background/75 sticky top-0 backdrop-blur-sm'
    >
      <Container.Slot className='flex items-center justify-between'>
        <Breadcrumbs />
        <UserControls />
      </Container.Slot>
    </Container.Component>
  )
}

import { ThemeSwitcherToggle } from '@/shared/lib/theme'
import { LanguageSwitcherToggle } from '@/shared/lib/i18n'

const UserControls: React.FC = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='flex items-center gap-0.5'>
        <ThemeSwitcherToggle />
        <LanguageSwitcherToggle />
      </div>
      <Separator orientation='vertical' className='mr-2 ml-1' />
      <div className='bg-primary size-8 rounded-full' />
    </div>
  )
}
