// src/packages/ui/shadcn/components/button/button.tsx

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@packages/ui/shadcn/lib/utils'

import {
  buttonCvaClassesDefaultModified,
  ButtonDefaultModified,
  type ButtonPropsDefaultModified,
} from './button-cli-modified'

const buttonCvaVariants = cva(buttonCvaClassesDefaultModified.base, {
  variants: {
    variant: {
      ...buttonCvaClassesDefaultModified.variants.variants.variant,
    },
    size: {
      ...buttonCvaClassesDefaultModified.variants.variants.size,
    },
  },
  defaultVariants: {
    ...buttonCvaClassesDefaultModified.variants.defaultVariants,
  },
})

type ButtonProps = Omit<ButtonPropsDefaultModified, 'data-variant' | 'data-size'>
type ButtonClassesProps = VariantProps<typeof buttonCvaVariants>
type ButtonComponentProps = ButtonProps & ButtonClassesProps

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonComponentProps) {
  return (
    <ButtonDefaultModified
      data-slot='button'
      className={cn(buttonCvaVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonCvaVariants, type ButtonProps }
