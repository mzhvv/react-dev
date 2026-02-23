// src/react-dev/widgets/react-dev-layout/settings-modal/index.tsx

import { Settings2Icon, XIcon } from 'lucide-react'

import { Button } from '@ui/components/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@ui/components/dialog'

import { LocalizationSections } from './localization'
import { ThemeSections } from './theme'

export const SettingsModal = () => {
  return (
    <Modal>
      <Settings />
    </Modal>
  )
}

const Settings = () => {
  return (
    <div>
      <LocalizationSections />
      <ThemeSections />
    </div>
  )
}

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Dialog>
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
        {children}
      </DialogContent>
    </Dialog>
  )
}
