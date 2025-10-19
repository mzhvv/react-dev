import type { FactoryVariantObject } from '@factories/variants'
import { createVariantsFactory } from '@factories/variants'

import type { ModeRadioGroupProps } from '../../types'

import { Variant0, Variant1 } from './variants/variants'
import { Variant4 } from './variants/variant-4'

type Variant = '0' | '1' | '4'

export const modeRadioGroupVariants = createVariantsFactory<Variant, ModeRadioGroupProps>(
  {
    '0': { component: Variant0 },
    '1': { component: Variant1 },
    '4': { component: Variant4 },
  } as const satisfies FactoryVariantObject<Variant, ModeRadioGroupProps>,
  '4'
)
