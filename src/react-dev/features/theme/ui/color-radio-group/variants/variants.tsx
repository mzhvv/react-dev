// src/react-dev/features/theme/ui/color-radio-group/variants/variant-0.tsx

import { cn } from '@ui/lib'
import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'
import { Label } from '@ui/components/label'

import type { VariantId } from '@react-dev/shared/types'
import type { ThemeColorRadioGroupProps } from '@react-dev/features/theme'

/* ThemeColorRadioGroup */
export const Variant0: React.FC<ThemeColorRadioGroupProps> = ({
  themeColor: { state, options },
  CONSTANTS: {
    themeColorGroup: { ariaLabel },
    themeColorGroupItemMap,
  },
}) => {
  return (
    <RadioGroup {...{ ...state, 'aria-label': ariaLabel }} className='flex h-8 items-center gap-4'>
      {options.map(option => {
        const { value, title, ariaLabel, label } = themeColorGroupItemMap[option]

        const variantId: VariantId<0> = `variant-0-${value}`

        return (
          <div key={variantId} className='flex items-center *:cursor-pointer'>
            <RadioGroupItem {...{ id: variantId, value }} />
            <Label
              {...{ htmlFor: variantId, title, 'aria-label': ariaLabel }}
              className='pl-2 text-sm font-medium whitespace-nowrap'
            >
              {label}
            </Label>
          </div>
        )
      })}
    </RadioGroup>
  )
}

/* ThemeColorRadioGroup */
export const Variant1: React.FC<ThemeColorRadioGroupProps> = ({
  themeColor: { state, options },
  CONSTANTS: {
    themeColorGroup: { ariaLabel },
    themeColorGroupItemMap,
  },
}) => {
  return (
    <RadioGroup {...{ ...state, 'aria-label': ariaLabel }} className='grid grid-cols-2 gap-3'>
      {options.map(option => {
        const { value, title, ariaLabel, label } = themeColorGroupItemMap[option]

        const variantId: VariantId<1> = `variant-1-${value}`

        return (
          <div
            key={variantId}
            className={cn(
              'outline-input relative h-8 rounded-md shadow-xs outline-2',
              'has-data-[state=checked]:outline-primary/50 has-focus-visible:ring-ring/50 has-focus-visible:ring-2'
            )}
          >
            <RadioGroupItem {...{ id: variantId, value: value }} className='sr-only' />
            <label
              {...{ htmlFor: variantId, title, 'aria-label': ariaLabel }}
              className='inline-flex size-full cursor-pointer items-center justify-center text-sm font-medium whitespace-nowrap after:absolute after:inset-0'
            >
              {label}
            </label>
          </div>
        )
      })}
    </RadioGroup>
  )
}
