// src/core/features/theme/ui/color-radio-group/variants/variants.tsx

import { Label2 } from '@ui/components/label-2'
import {
  RadioGroup,
  RadioGroupItem_V0,
  RadioGroupItem_V1,
  RadioGroupItem_V3,
} from '@ui/components/radio-group'

import type { VariantId } from '@core/types/shared'

import type { ThemeColorRadioGroupProps } from '../../../types'

export { ThemeColorRadioGroupV0 as Variant0 }
const ThemeColorRadioGroupV0: React.FC<ThemeColorRadioGroupProps> = ({
  themeColor: { state, options },
  CONSTANTS: {
    themeColorForm: { legend },
    themeColorGroup: { ariaLabel },
    themeColorGroupItemMap,
  },
}) => {
  return (
    <fieldset>
      <Label2 asChild className='px-0'>
        <legend>{legend}</legend>
      </Label2>

      <RadioGroup
        {...{ ...state, 'aria-label': ariaLabel }}
        className='flex h-8 items-center gap-4'
      >
        {options.map(option => {
          const { value, ...CONSTANTS } = themeColorGroupItemMap[option]
          const variantId: VariantId<0> = `variant-0-${value}`
          return <RadioGroupItem_V0 key={variantId} {...{ id: variantId, value, ...CONSTANTS }} />
        })}
      </RadioGroup>
    </fieldset>
  )
}

export { ThemeColorRadioGroupV1 as Variant1 }
const ThemeColorRadioGroupV1: React.FC<ThemeColorRadioGroupProps> = ({
  themeColor: { state, options },
  CONSTANTS: {
    themeColorForm: { legend },
    themeColorGroup: { ariaLabel },
    themeColorGroupItemMap,
  },
}) => {
  return (
    <fieldset>
      <Label2 asChild className='px-0'>
        <legend>{legend}</legend>
      </Label2>

      <RadioGroup {...{ ...state, 'aria-label': ariaLabel }} className='grid grid-cols-2 gap-3'>
        {options.map(option => {
          const { value, ...CONSTANTS } = themeColorGroupItemMap[option]
          const variantId: VariantId<1> = `variant-1-${value}`
          return <RadioGroupItem_V1 key={variantId} {...{ id: variantId, value, ...CONSTANTS }} />
        })}
      </RadioGroup>
    </fieldset>
  )
}

export { ThemeColorRadioGroupV2 as Variant2 }
export const ThemeColorRadioGroupV2: React.FC<ThemeColorRadioGroupProps> = ({
  themeColor: { state, options },
  CONSTANTS: {
    themeColorForm: { legend },
    themeColorGroup: { ariaLabel },
    themeColorGroupItemMap,
  },
  style: { COLOR_MAP },
}) => {
  return (
    <fieldset>
      <Label2 asChild className='px-0'>
        <legend>{legend}</legend>
      </Label2>

      <RadioGroup
        {...{ ...state, 'aria-label': ariaLabel }}
        className='flex h-8 items-center gap-1.5'
      >
        {options.map(option => {
          const { value, ...CONSTANTS } = themeColorGroupItemMap[option]
          const variantId: VariantId<3> = `variant-3-${value}`
          return (
            <RadioGroupItem_V3
              key={variantId}
              {...{ value, ...CONSTANTS, colorClassName: COLOR_MAP[option] }}
            />
          )
        })}
      </RadioGroup>
    </fieldset>
  )
}
