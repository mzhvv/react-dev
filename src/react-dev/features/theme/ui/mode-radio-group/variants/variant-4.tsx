// src/react-dev/features/theme/ui/mode-radio-group/variants/variant-4.tsx

import { cn } from '@ui/lib'
import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'
import { Image } from '@ui/components/image'

import type { VariantId } from '@react-dev/shared/types'

import type { ThemeModeRadioGroupProps } from '../../../types'

/* Variant4 */
export const ThemeModeRadioGroup: React.FC<ThemeModeRadioGroupProps> = ({
  themeMode: { state, options },
  CONSTANTS: {
    themeModeGroup: { ariaLabel },
    themeModeGroupItemMap,
  },
}) => {
  return (
    <RadioGroup {...{ ...state, 'aria-label': ariaLabel }} className='grid grid-cols-3 gap-3'>
      {options.map(option => {
        const { value, title, ariaLabel, image } = themeModeGroupItemMap[option]

        const variantId: VariantId<4> = `variant-4-${value}`

        return (
          <div
            key={variantId}
            className={cn(
              'outline-input relative overflow-hidden rounded-md shadow-xs outline-2',
              'has-data-[state=checked]:outline-primary/50 has-focus-visible:ring-ring/50 has-focus-visible:ring-2'
            )}
          >
            <RadioGroupItem
              {...{ id: variantId, value }}
              className='bg-background/50 dark:bg-background/50 absolute top-2 left-2 size-4' // sr-only
            />
            <label
              {...{ htmlFor: variantId, title, 'aria-label': ariaLabel }}
              className='cursor-pointer after:absolute after:inset-0'
            >
              <Image {...{ image, width: 176, height: 140, loading: 'lazy', decoding: 'async' }} />
            </label>
          </div>
        )
      })}
    </RadioGroup>
  )
}
