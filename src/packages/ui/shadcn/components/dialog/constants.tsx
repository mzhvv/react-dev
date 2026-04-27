// src/packages/ui/shadcn/components/dialog/constants.tsx

import { Square } from 'lucide-react'
import type { DialogConstants } from './types'

export const DIALOG_CONSTANTS_FALLBACK = {
  title: 'Dialog',
  buttonOpen: {
    icon: <Square />,
    title: 'Open a dialog box',
    ariaLabel: 'Open a dialog box',
  },
  buttonClose: {
    title: 'Close the dialog box',
    ariaLabel: 'Close the dialog box',
  },
} as const satisfies Required<DialogConstants>
