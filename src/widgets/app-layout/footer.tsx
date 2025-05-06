// src/widgets/app/footer.tsx

import { ApplicationMap, AuthorLinks } from '@/widgets/shared'
import { Container, Separator } from '@/shared/ui'

export const AppFooter: React.FC = () => {
  return (
    <Container.Component asElement='footer' className='px-application border-t border-transparent'>
      <Container.Slot className='*:not-first:h-[60px] *:first:h-[59px]'>
        <div className='flex items-center justify-between'>
          <ApplicationMap />
          <UserControls />
        </div>
        <div className='flex items-center justify-center'>
          <AuthorLinks />
        </div>
      </Container.Slot>
    </Container.Component>
  )
}

import { ThemeSwitcherSelect } from '@/shared/lib/theme'
import { LanguageSwitcherSelect } from '@/shared/lib/i18n'
import { Up } from './up'

const UserControls: React.FC = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='item-center flex gap-0.5'>
        <ThemeSwitcherSelect />
        <LanguageSwitcherSelect side='top' />
      </div>
      <Separator orientation='vertical' />
      <Up />
    </div>
  )
}
