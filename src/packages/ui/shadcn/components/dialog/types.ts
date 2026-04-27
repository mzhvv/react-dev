// src/packages/ui/shadcn/components/dialog/types.ts

import type { LucideIcon } from 'lucide-react'

export type DialogConstants = {
  title: string

  buttonOpen: { icon: React.ReactNode | LucideIcon; title?: string; ariaLabel?: string }
  buttonClose?: { title: string; ariaLabel?: string }
}
