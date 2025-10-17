// src/react-dev/shared/libs/theme/ui/mode-radio-group/config.ts

import type { ModeRadioGroupProps } from '../types'
import type { FactoryVariantObject } from '../variants-factory'
import { createVariantsFactory } from '../variants-factory'

import { Variant0, Variant1 } from './variants/variants'
// import { ModeRadioGroup as Variant4 } from './variants/variant-4'
// import { ModeRadioGroup as Variant5 } from './variants/variant-5'

type Variant = '0' | '1' // | '4' | '5'

export const modeRadioGroupVariants = createVariantsFactory<Variant, ModeRadioGroupProps>(
  {
    '0': { component: Variant0 },
    '1': { component: Variant1 },

    // '4': { component: Variant4 },
    // '5': { component: Variant5 },
  } as const satisfies FactoryVariantObject<Variant, ModeRadioGroupProps>,
  '1'
)
