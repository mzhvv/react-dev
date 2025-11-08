// src/react-dev/features/theme/ui/mode-radio-group/variants/variants.tsx

import { cn } from '@ui/lib'
import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'
import { Label } from '@ui/components/label'

import type { VariantId } from '@react-dev/shared/types'

import type { ThemeModeRadioGroupProps } from '../../../types'

/* ThemeModeRadioGroup */
export const Variant0: React.FC<ThemeModeRadioGroupProps> = ({
  themeMode: { state, options },
  CONSTANTS: {
    themeModeGroup: { ariaLabel },
    themeModeGroupItemMap,
  },
}) => {
  return (
    <RadioGroup {...{ ...state, 'aria-label': ariaLabel }} className='flex h-8 items-center gap-4'>
      {options.map(option => {
        const { value, title, ariaLabel, label } = themeModeGroupItemMap[option]

        const variantId: VariantId<0> = `variant-0-${value}`

        return (
          <div key={variantId} className='flex items-center *:cursor-pointer'>
            <RadioGroupItem {...{ id: variantId, value }} />
            <Label {...{ htmlFor: variantId, title, 'aria-label': ariaLabel }} className='pl-2'>
              {label}
            </Label>
          </div>
        )
      })}
    </RadioGroup>
  )
}

/* ThemeModeRadioGroup */
export const Variant1: React.FC<ThemeModeRadioGroupProps> = ({
  themeMode: { state, options },
  CONSTANTS: {
    themeModeGroup: { ariaLabel },
    themeModeGroupItemMap,
  },
}) => {
  return (
    <RadioGroup {...{ ...state, 'aria-label': ariaLabel }} className='grid grid-cols-3 gap-3'>
      {options.map(option => {
        const { value, title, ariaLabel, label } = themeModeGroupItemMap[option]

        const variantId: VariantId<1> = `variant-1-${value}`

        return (
          <div
            key={variantId}
            className={cn(
              'outline-input relative h-15 rounded-md shadow-xs outline',
              'has-data-[state=checked]:outline-primary/50 has-focus-visible:ring-ring/50 has-focus-visible:ring-[3px]'
            )}
          >
            <RadioGroupItem
              {...{ id: variantId, value: value }}
              className='absolute top-2 left-2 size-4' // sr-only - при необходимости
            />
            <label
              {...{ htmlFor: variantId, title, 'aria-label': ariaLabel }}
              className='flex size-full cursor-pointer items-center justify-center after:absolute after:inset-0'
            >
              {label}
            </label>
          </div>
        )
      })}
    </RadioGroup>
  )
}
