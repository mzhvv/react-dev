// src/core/features/theme/ui/mode-radio-group/variants/variants.tsx

import { Label2 } from '@ui/components/label-2'
import {
  RadioGroup,
  RadioGroupItem_V0,
  RadioGroupItem_V1,
  RadioGroupItem_V4,
} from '@ui/components/radio-group'

import type { VariantId } from '@core/types/shared'

import type { ThemeModeRadioGroupProps } from '../../../types'

export { ThemeModeRadioGroupV0 as Variant0 }
const ThemeModeRadioGroupV0: React.FC<ThemeModeRadioGroupProps> = ({
  themeMode: { state, options },
  CONSTANTS: {
    themeModeForm: { legend },
    themeModeGroup: { ariaLabel },
    themeModeGroupItemMap,
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
          const { value, ...CONSTANTS } = themeModeGroupItemMap[option]
          const variantId: VariantId<0> = `variant-0-${value}`
          return <RadioGroupItem_V0 key={variantId} {...{ id: variantId, value, ...CONSTANTS }} />
        })}
      </RadioGroup>
    </fieldset>
  )
}

export { ThemeModeRadioGroupV1 as Variant1 }
const ThemeModeRadioGroupV1: React.FC<ThemeModeRadioGroupProps> = ({
  themeMode: { state, options },
  CONSTANTS: {
    themeModeForm: { legend },
    themeModeGroup: { ariaLabel },
    themeModeGroupItemMap,
  },
}) => {
  return (
    <fieldset>
      <Label2 asChild className='px-0'>
        <legend>{legend}</legend>
      </Label2>

      <RadioGroup {...{ ...state, 'aria-label': ariaLabel }} className='grid grid-cols-3 gap-3'>
        {options.map(option => {
          const { value, ...CONSTANTS } = themeModeGroupItemMap[option]
          const variantId: VariantId<1> = `variant-1-${value}`
          return <RadioGroupItem_V1 key={variantId} {...{ id: variantId, value, ...CONSTANTS }} />
        })}
      </RadioGroup>
    </fieldset>
  )
}

export { ThemeModeRadioGroupV2 as Variant2 }
const ThemeModeRadioGroupV2: React.FC<ThemeModeRadioGroupProps> = ({
  themeMode: { state, options },
  CONSTANTS: {
    themeModeForm: { legend },
    themeModeGroup: { ariaLabel },
    themeModeGroupItemMap,
  },
}) => {
  return (
    <fieldset>
      <Label2 asChild className='px-0'>
        <legend>{legend}</legend>
      </Label2>

      <RadioGroup {...{ ...state, 'aria-label': ariaLabel }} className='grid grid-cols-3 gap-3'>
        {options.map(option => {
          const { value, ...CONSTANTS } = themeModeGroupItemMap[option]
          const variantId: VariantId<2> = `variant-2-${value}`
          return <RadioGroupItem_V4 key={variantId} {...{ id: variantId, value, ...CONSTANTS }} />
        })}
      </RadioGroup>
    </fieldset>
  )
}
