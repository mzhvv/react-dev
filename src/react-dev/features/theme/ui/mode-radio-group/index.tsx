// src/react-dev/features/theme/ui/mode-radio-group/index.tsx

import type { Variant as V } from '@react-dev/shared/types'

import type { FactoryComponentVariantsConfig } from '@factories/component-variants'
import { createComponentVariantsFactory } from '@factories/component-variants'

import type { ThemeModeRadioGroupProps } from '../../types'

import { Variant0, Variant1 } from './variants/variants'
import { ThemeModeRadioGroup as Variant4 } from './variants/variant-4'

type ThemeModeRadioGroupFactoryVariant = V<0 | 1 | 4>

export const themeModeRadioGroupVariants = createComponentVariantsFactory<
  ThemeModeRadioGroupFactoryVariant,
  ThemeModeRadioGroupProps
>(
  {
    'variant-0': { component: Variant0 },
    'variant-1': { component: Variant1 },

    'variant-4': { component: Variant4 },
  } as const satisfies FactoryComponentVariantsConfig<
    ThemeModeRadioGroupFactoryVariant,
    ThemeModeRadioGroupProps
  >,
  'variant-0'
)
