// src/react-dev/shared/libs/theme/ui/color-radio-group/config.tsx

import type { ColorRadioGroupProps } from '../types'

import type { FactoryVariantObject } from '../variants-factory'
import { createVariantsFactory } from '../variants-factory'

import { Variant0 } from './variants/variant-0'
import { ColorRadioGroup as Variant1 } from './variants/variant-1'

type Variant = '0' | '1'
export const colorRadioGroupVariants = createVariantsFactory<Variant, ColorRadioGroupProps>(
  {
    '0': { component: Variant0 },
    '1': { component: Variant1 },
  } satisfies FactoryVariantObject<Variant, ColorRadioGroupProps>,
  '1'
)
