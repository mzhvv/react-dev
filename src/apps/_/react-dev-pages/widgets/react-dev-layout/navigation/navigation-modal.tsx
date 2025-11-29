import { GripIcon, XIcon } from 'lucide-react'

import { NavigationDataRender, SIDEBAR_NAVIGATION } from '@react-dev/__aggregator__/navigation'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@ui/components/dialog'
import { Button } from '@ui/components/button'

export const NavigationModal = () => {
  return (
    <Modal>
      <NavigationDataRender
        navigationSections={SIDEBAR_NAVIGATION}
        orientation='vertical'
        variant='modal'
      />
    </Modal>
  )
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
