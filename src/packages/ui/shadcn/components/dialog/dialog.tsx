// src/packages/ui/shadcn/components/dialog/dialog.tsx

import { XIcon } from 'lucide-react'
import { Button } from '@packages/ui/components/button'

import {
  DialogDefault,
  DialogTriggerDefault,
  DialogContentDefault,
  DialogHeaderDefault,
  DialogTitleDefault,
  DialogCloseDefault,
} from './default'
import type { DialogConstants } from './types'
import { DIALOG_CONSTANTS_FALLBACK } from './constants'

export const Dialog: React.FC<{
  children: React.ReactNode
  meta: DialogConstants
}> = ({ children, meta }) => {
  const IconOB = meta.buttonOpen.icon as React.ComponentType

  return (
    <DialogDefault>
      <DialogTriggerDefault asChild>
        <Button
          variant='ghost'
          size='icon'
          title={meta.buttonOpen.title || DIALOG_CONSTANTS_FALLBACK.buttonOpen.title}
          aria-label={meta.buttonOpen.ariaLabel || DIALOG_CONSTANTS_FALLBACK.buttonOpen.ariaLabel}
        >
          {(IconOB && <IconOB />) || DIALOG_CONSTANTS_FALLBACK.buttonOpen.icon}
        </Button>
      </DialogTriggerDefault>
      <DialogContentDefault
        showCloseButton={false}
        aria-describedby={undefined}
        className='gap-0 p-4 !transition-none sm:max-w-[425px]' // !duration-0 !ease-[0]
      >
        <DialogHeaderDefault className='p-2'>
          <DialogTitleDefault className='flex items-center justify-between'>
            {meta.title}
            <DialogCloseDefault asChild>
              <Button
                variant='ghost'
                size='icon-sm'
                title={meta.buttonClose?.title || DIALOG_CONSTANTS_FALLBACK.buttonClose.title}
                aria-label={
                  meta.buttonClose?.ariaLabel ||
                  meta.buttonClose?.title ||
                  DIALOG_CONSTANTS_FALLBACK.buttonClose.ariaLabel
                }
              >
                <XIcon />
              </Button>
            </DialogCloseDefault>
          </DialogTitleDefault>
        </DialogHeaderDefault>
        {children}
      </DialogContentDefault>
    </DialogDefault>
  )
}
