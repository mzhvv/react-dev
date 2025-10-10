import { Settings2Icon, XIcon } from 'lucide-react'

import { ChooseTheme } from '@react-dev/shared/libs/theme'

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
      <form>
        <DialogTrigger asChild>
          <Button variant='ghost' size='icon'>
            <Settings2Icon />
          </Button>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          aria-describedby={undefined}
          className='sm:max-w-[425px]'
        >
          <DialogHeader>
            <DialogTitle className='flex items-center justify-between'>
              <div>Settings</div>
              <DialogClose asChild>
                <Button variant='ghost' size='icon-sm'>
                  <XIcon />
                </Button>
              </DialogClose>
            </DialogTitle>
          </DialogHeader>
          <div>
            <ChooseTheme />
          </div>
        </DialogContent>
      </form>
    </Dialog>
  )
}
