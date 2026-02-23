// src/react-dev/widgets/react-dev-layout/mobile/navigation.tsx

import { GripIcon, XIcon } from 'lucide-react'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@ui/components/dialog'
import { Button } from '@ui/components/button'

export const MobileSidebarNavigation = () => {
  return <Modal>''</Modal>
}

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          title='Открыть модальное окно навигации'
          aria-label='Открыть модальное окно навигации'
        >
          <GripIcon />
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        aria-describedby={undefined}
        className='gap-0 p-4 transition-none! sm:max-w-[425px]' // !duration-0 !ease-[0]
      >
        <DialogHeader className='p-2'>
          <DialogTitle className='flex items-center justify-between'>
            Навигация
            <DialogClose asChild>
              <Button
                variant='ghost'
                size='icon-sm'
                title='Закрыть модальное окно навигации'
                aria-label='Закрыть модальное окно навигации'
              >
                <XIcon />
              </Button>
            </DialogClose>
          </DialogTitle>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  )
}
