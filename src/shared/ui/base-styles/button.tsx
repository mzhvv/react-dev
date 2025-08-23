// src/shared/ui/base-styles/button.tsx

import { cn } from '@/shared/utils'

type BaseSizeButtonStyle = 'sm' | 'default' | 'lg' | 'icon-sm' | 'icon'

export const baseButtonStyle = cn(
  'cursor-pointer outline-none', //  Поведение
  'inline-flex shrink-0 items-center justify-center gap-2', //  Макет

  'whitespace-nowrap rounded-md', //  Визуал
  'text-sm font-medium', // Типография
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", // Иконки

  // Состояния
  'disabled:pointer-events-none disabled:opacity-50', // disabled
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', // focus
  'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive' // aria-invalid

  // 'transition-all' // animation
)

export const baseSizeButtonStyle = {
  sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
  default: 'h-9 px-4 py-2 has-[>svg]:px-3',
  lg: 'h-10 px-6 has-[>svg]:px-4',

  'icon-sm': 'size-8',
  icon: 'size-9',
} satisfies Record<BaseSizeButtonStyle, string>
