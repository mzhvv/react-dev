// src/react-dev/widgets/react-dev-layout/sidebar/settings/settings.tsx

import { Settings2Icon, XIcon } from 'lucide-react'

import { ThemeControls } from '@react-dev/shared/libs/theme'

import { Button } from '@ui/components/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@ui/components/dialog'

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
        className='gap-0 space-y-3 p-3 !transition-none sm:max-w-[425px]' // !duration-0 !ease-[0]
      >
        <DialogHeader className='p-3'>
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
        </DialogHeader>

        <div className='max-h-[calc(100vh-10rem)] overflow-y-auto px-3 py-0'>
          <ThemeControls />
        </div>

        {/* <DialogFooter className='p-3'>...</DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}
