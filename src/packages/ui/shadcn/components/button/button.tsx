// src/packages/ui/shadcn/components/button/button.tsx

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@packages/ui/shadcn/lib/utils'

import { buttonCvaClassesDefault, ButtonDefault, type ButtonPropsDefault } from './default'

const buttonCvaVariants = cva(buttonCvaClassesDefault.base, {
  variants: {
    variant: {
      ...buttonCvaClassesDefault.variants.variants.variant,
    },
    size: {
      ...buttonCvaClassesDefault.variants.variants.size,
    },
  },
  defaultVariants: {
    ...buttonCvaClassesDefault.variants.defaultVariants,
  },
})

type ButtonProps = Omit<ButtonPropsDefault, 'data-variant' | 'data-size'>
type ButtonClassesProps = VariantProps<typeof buttonCvaVariants>
type ButtonComponentProps = ButtonProps & ButtonClassesProps

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonComponentProps) {
  return (
    <ButtonDefault
      data-slot='button'
      className={cn(buttonCvaVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonCvaVariants, type ButtonProps }
