// src/react-dev/widgets/react-dev-layout/sidebar-desktop/settings/settings.tsx

import { Settings2Icon, XIcon } from 'lucide-react'

import { ThemeControls } from './theme'

import { Button } from '@ui/components/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@ui/components/dialog'
import { Slot } from '@radix-ui/react-slot'

export const Settings = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' size='icon' title='Open settings' aria-label='Open settings'>
          <Settings2Icon />
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        aria-describedby={undefined}
        className='gap-0 p-3 !transition-none sm:max-w-[425px]' // !duration-0 !ease-[0]
      >
        <DialogHeader className='p-3 pb-0'>
          <Slot className=''>
            <DialogTitle className='flex items-center justify-between'>
              Settings
              <DialogClose asChild>
                <Button
                  variant='ghost'
                  size='icon-sm'
                  title='Close settings'
                  aria-label='Close settings'
                >
                  <XIcon />
                </Button>
              </DialogClose>
            </DialogTitle>
          </Slot>
        </DialogHeader>

        <div
          className='overflow-y-auto p-3'
          // max-h-[calc(100vh-10rem)]
        >
          <ThemeControls />
        </div>
      </DialogContent>
    </Dialog>
  )
}
