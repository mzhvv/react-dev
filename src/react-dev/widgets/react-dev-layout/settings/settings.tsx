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

export const Settings = () => {
  return (
    <Modal>
      <ThemeControls />
    </Modal>
  )
}

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            title='Открыть модальное окно настроек'
            aria-label='Открыть модальное окно настроек'
          >
            <Settings2Icon />
          </Button>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          aria-describedby={undefined}
          className='gap-0 p-4 !transition-none sm:max-w-[425px]' // !duration-0 !ease-[0]
        >
          <DialogHeader className='p-2'>
            <DialogTitle className='flex items-center justify-between'>
              Настройки
              <DialogClose asChild>
                <Button
                  variant='ghost'
                  size='icon-sm'
                  title='Закрыть модальное окно настроек'
                  aria-label='Закрыть модальное окно настроек'
                >
                  <XIcon />
                </Button>
              </DialogClose>
            </DialogTitle>
          </DialogHeader>
          <div>{children}</div>
        </DialogContent>
      </form>
    </Dialog>
  )
}
