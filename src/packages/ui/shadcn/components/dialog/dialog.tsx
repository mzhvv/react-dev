// src/packages/ui/shadcn/components/dialog/dialog.tsx

import type React from 'react'

import { XIcon } from 'lucide-react'
import { Button } from '@packages/ui/components/button'

import { DialogHeaderDefault, DialogTitleDefault, DialogCloseDefault } from './default'

export const DialogHeader = () => {
  return (
    <DialogHeaderDefault className='p-2'>
      <DialogTitleDefault className='flex items-center justify-between'>
        'title'
        <DialogCloseDefault asChild>
          <Button variant='ghost' size='icon-sm'>
            <XIcon />
          </Button>
        </DialogCloseDefault>
      </DialogTitleDefault>
    </DialogHeaderDefault>
  )
}

export const DialogBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>
}
