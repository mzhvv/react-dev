// src/packages/ui/shadcn/components/button/button.tsx

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@packages/ui/shadcn/lib/utils'
import { buttonCvaClasses } from '@packages/ui/shadcn/components/__default__/button'

import { ButtonDefault, type ButtonPropsDefault } from './default'

const buttonCvaVariants = cva(buttonCvaClasses.base, {
  variants: {
    variant: {
      ...buttonCvaClasses.variants.variants.variant,
    },
    size: {
      ...buttonCvaClasses.variants.variants.size,
    },
  },
  defaultVariants: {
    ...buttonCvaClasses.variants.defaultVariants,
  },
})

type ButtonClassesProps = VariantProps<typeof buttonCvaVariants>
export type ButtonProps = Omit<ButtonPropsDefault, 'data-variant' | 'data-size'>
type ButtonComponentProps = ButtonProps & ButtonClassesProps

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: ButtonComponentProps) {
  return (
    <ButtonDefault
      data-slot='button'
      asChild={asChild}
      className={cn(buttonCvaVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonCvaVariants }
