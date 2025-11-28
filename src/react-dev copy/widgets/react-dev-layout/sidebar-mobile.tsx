import { Button } from '@ui/components/button'
import { User2Icon } from 'lucide-react'

import { SettingsModal } from './settings-modal'
import { NavigationModal } from './navigation'

export const SidebarMobile = () => {
  return (
    <div className='sticky bottom-0'>
      <div className='bg-border/50 mx-7 h-px rounded-full' />
      <div className='flex h-14 items-center justify-between gap-2 px-7'>
        <Button variant='default' size='icon'>
          <span className='text-sm font-bold tracking-tighter'>RD</span>
        </Button>
        <NavigationModal />
        <SettingsModal />
        <Button variant='secondary' size='icon'>
          <User2Icon />
        </Button>
      </div>
    </div>
  )
}
