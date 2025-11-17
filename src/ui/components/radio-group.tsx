import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { CircleIcon } from 'lucide-react'

import { cn } from '@/ui/lib/utils'
import { Image, type ImageProps } from '@ui/components/image'

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot='radio-group'
      className={cn('grid gap-3', className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot='radio-group-item'
      className={cn(
        'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        'cursor-pointer transition-[box-shadow]', // transition-[color,box-shadow]
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot='radio-group-indicator'
        className='relative flex items-center justify-center'
      >
        <CircleIcon className='fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2' />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }

type IRadioGroupItem = Record<'id' | 'value' | 'title' | 'ariaLabel' | 'label', string> & {
  colorClassName?: string
}

export const RadioGroupItem_V0: React.FC<Omit<IRadioGroupItem, 'colorClassName'>> = ({
  id,
  value,
  title,
  ariaLabel,
  label,
}) => {
  return (
    <div className='flex items-center *:cursor-pointer'>
      <RadioGroupItem {...{ id, value }} />
      <label
        {...{ htmlFor: id, title, 'aria-label': ariaLabel }}
        className='pl-2 text-sm font-medium whitespace-nowrap'
      >
        {label}
      </label>
    </div>
  )
}

export const RadioGroupItem_V1: React.FC<Omit<IRadioGroupItem, 'colorClassName'>> = ({
  id,
  value,
  title,
  ariaLabel,
  label,
}) => {
  return (
    <div
      className={cn(
        'outline-input relative h-8 rounded-md shadow-xs outline-2',
        'has-data-[state=checked]:outline-primary/50 has-focus-visible:ring-ring/50 has-focus-visible:ring-2'
      )}
    >
      <RadioGroupItem {...{ id, value }} className='sr-only' />
      <label
        {...{ htmlFor: id, title, 'aria-label': ariaLabel }}
        className='inline-flex size-full cursor-pointer items-center justify-center text-sm font-medium whitespace-nowrap after:absolute after:inset-0'
      >
        {label}
      </label>
    </div>
  )
}

export const RadioGroupItem_V3: React.FC<Omit<IRadioGroupItem, 'id'>> = ({
  value,
  title,
  ariaLabel,
  colorClassName,
}) => {
  return (
    <RadioGroupItem
      {...{ value, title, 'aria-label': ariaLabel }}
      className={cn(
        'size-7',
        'border-none', // data-[state=checked]:border-input border-input
        '[&_[data-slot=radio-group-indicator]_svg]:fill-background text-background [&_[data-slot=radio-group-indicator]_svg]:size-2.5',
        colorClassName
      )}
    />
  )
}

export const RadioGroupItem_V4: React.FC<IRadioGroupItem & ImageProps> = ({
  id,
  value,
  title,
  ariaLabel,
  image,
}) => {
  return (
    <div
      key={id}
      className={cn(
        'outline-input relative overflow-hidden rounded-md shadow-xs outline-2',
        'has-data-[state=checked]:outline-primary/50 has-focus-visible:ring-ring/50 has-focus-visible:ring-2'
      )}
    >
      <RadioGroupItem
        {...{ id, value }}
        className='bg-background/50 dark:bg-background/50 absolute top-2 left-2 size-4' // sr-only
      />
      <label
        {...{ htmlFor: id, title, 'aria-label': ariaLabel }}
        className='cursor-pointer after:absolute after:inset-0'
      >
        <Image {...{ image, width: 176, height: 140, loading: 'lazy', decoding: 'async' }} />
      </label>
    </div>
  )
}
