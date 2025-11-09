// src/react-dev/features/theme/ui/color-radio-group/variants/variant-0.tsx

import { cn } from '@ui/lib'
import { RadioGroup, RadioGroupItem } from '@ui/components/radio-group'

import type { VariantId } from '@react-dev/shared/types'
import type { ThemeColorRadioGroupProps } from '@react-dev/features/theme'

/* Variant1 */
export const ThemeColorRadioGroup: React.FC<ThemeColorRadioGroupProps> = ({
  themeColor: { state, options },
  CONSTANTS: {
    themeColorGroup: { ariaLabel },
    themeColorGroupItemMap,
  },
  style: { COLOR_MAP },
}) => {
  return (
    <RadioGroup
      {...{ ...state, 'aria-label': ariaLabel }}
      className='flex h-8 items-center gap-1.5'
    >
      {options.map(option => {
        const {
          value,
          // label,
          title,
          ariaLabel,
        } = themeColorGroupItemMap[option]

        const variantId: VariantId<0> = `variant-0-${value}`

        return (
          <RadioGroupItem
            key={variantId}
            {...{ value, title, 'aria-label': ariaLabel }}
            className={cn(
              'size-7',
              'border-none', // data-[state=checked]:border-input border-input
              '[&_[data-slot=radio-group-indicator]_svg]:fill-background text-background [&_[data-slot=radio-group-indicator]_svg]:size-2.5',
              COLOR_MAP[option]
            )}
          />
        )
      })}
    </RadioGroup>
  )
}
