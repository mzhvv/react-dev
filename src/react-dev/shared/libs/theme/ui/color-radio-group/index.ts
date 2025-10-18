import type { FactoryVariantObject } from '@factories/variants'
import { createVariantsFactory } from '@factories/variants'

import type { ColorRadioGroupProps } from '../../types'

import { Variant0 } from './variants/variant-0'

type Variant = '0'
export const colorRadioGroupVariants = createVariantsFactory<Variant, ColorRadioGroupProps>(
  {
    '0': { component: Variant0 },
  } satisfies FactoryVariantObject<Variant, ColorRadioGroupProps>,
  '0'
)
