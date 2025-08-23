import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/utils'
import { baseButtonStyle, baseSizeButtonStyle } from './base-styles'

const toggleVariants = cva(
  cn(
    baseButtonStyle,
    'hover:bg-muted hover:text-muted-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground'
  ),
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground',
        ghost:
          'hover:text-foreground hover:bg-muted border-none shadow-none data-[state=on]:bg-transparent',
        'ghost-round':
          'hover:text-foreground hover:bg-muted hover:data-[state=on]:bg-muted rounded-full border-none shadow-none data-[state=on]:bg-transparent',
      },
      size: baseSizeButtonStyle,
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type ToggleVariants = VariantProps<typeof toggleVariants>

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & ToggleVariants) {
  return (
    <TogglePrimitive.Root
      data-slot='toggle'
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
