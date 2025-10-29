// src/react-dev/features/theme/ui/mode-radio-group/variants/variants.tsx

import { modeOptionMap } from '../../constants'

import { cn } from '@ui/lib'
import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'
import { Label } from '@ui/components/label'

import type { ModeRadioGroupProps } from '../../../types'

/* ThemeRadioGroup */
export const Variant0: React.FC<ModeRadioGroupProps> = ({ options, ...props }) => {
  return (
    <RadioGroup aria-label='Choose theme' className='flex h-8 items-center gap-4' {...props}>
      {options.map(option => {
        const { value, label } = modeOptionMap[option]

        const id = `variant0-${label}`
        const aria = `Switch to "${label}" theme`

        return (
          <div key={id} className='flex items-center *:cursor-pointer'>
            <RadioGroupItem value={value} id={id} />
            <Label htmlFor={id} title={aria} aria-label={aria} className='pl-2'>
              {option}
            </Label>
          </div>

          // <div key={id} className='relative flex items-center gap-2 p-1'>
          //   <RadioGroupItem value={value} id={id} />
          //   <Label
          //     htmlFor={id}
          //     title={aria}
          //     aria-label={aria}
          //     className='cursor-pointer after:absolute after:inset-0'
          //   >
          //     {label}
          //   </Label>
          // </div>
        )
      })}
    </RadioGroup>
  )
}

/* ThemeRadioGroup */
export const Variant1: React.FC<ModeRadioGroupProps> = ({ options, ...props }) => {
  return (
    <RadioGroup aria-label='Choose theme' className='grid grid-cols-3 gap-3' {...props}>
      {options.map(option => {
        const { value, label } = modeOptionMap[option]

        const id = `variant1-${label}`
        const aria = `Switch to "${label}" theme`

        return (
          <div
            key={id}
            className={cn(
              'outline-input relative h-15 rounded-md shadow-xs outline',
              'has-data-[state=checked]:outline-primary/50 has-focus-visible:ring-ring/50 has-focus-visible:ring-[3px]'
            )}
          >
            <RadioGroupItem
              id={id}
              value={value}
              className='absolute top-2 left-2 size-4' // sr-only - при необходимости
            />
            <label
              htmlFor={id}
              title={aria}
              aria-label={aria}
              className='flex size-full cursor-pointer items-center justify-center after:absolute after:inset-0'
            >
              {option}
            </label>
          </div>
        )
      })}
    </RadioGroup>
  )
}
