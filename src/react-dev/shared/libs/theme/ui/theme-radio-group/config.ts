// src/react-dev/shared/libs/theme/ui/theme-radio-group/variants/config.ts

import type { ThemeRadioGroupProps } from '../types'
import { createVariantsFactory } from '../variants-factory'

import { Variant2 } from './variants/variants'
import { ThemeRadioGroup as Variant4 } from './variants/variant-4'
import { ThemeRadioGroup as Variant5 } from './variants/variant-5'

export const themeRadioGroupVariants = createVariantsFactory<ThemeRadioGroupProps>({
  '2': { variant: Variant2 },
  '4': { variant: Variant4 },
  '5': { variant: Variant5 },
} as const)

export const themeRadioGroupVariantsConfig = {
  defaultVariant: '4',
} as const satisfies { defaultVariant: keyof typeof themeRadioGroupVariants.map }
