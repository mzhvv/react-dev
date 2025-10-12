import type { ColorRadioGroupProps } from '../types'
import { createVariantsFactory } from '../variants-factory'

import { ColorRadioGroup as Variant1 } from './variants/variant-1'

export const colorRadioGroupVariants = createVariantsFactory<ColorRadioGroupProps>({
  '1': { variant: Variant1 },
} as const)

export const colorRadioGroupVariantsConfig = {
  defaultVariant: '1',
} as const satisfies { defaultVariant: keyof typeof colorRadioGroupVariants.map }
