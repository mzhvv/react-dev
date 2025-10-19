// src/react-dev/features/theme/ui/color-radio-group/index.ts

import type { FactoryVariantObject } from '@factories/variants'
import { createVariantsFactory } from '@factories/variants'

import type { ColorRadioGroupProps } from '../../types'

import { ColorRadioGroup } from './variants/variant-0'

type Variant = '0'
export const colorRadioGroupVariants = createVariantsFactory<Variant, ColorRadioGroupProps>(
  {
    '0': { component: ColorRadioGroup },
  } satisfies FactoryVariantObject<Variant, ColorRadioGroupProps>,
  '0'
)
