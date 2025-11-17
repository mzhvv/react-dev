// src/react-dev/features/theme/ui/mode-radio-group/index.tsx

import type { Variant } from '@react-dev/shared/types'

import type { FactoryComponentVariantsConfig } from '@factories/component-variants'
import { createComponentVariantsFactory } from '@factories/component-variants'

import type { ThemeModeRadioGroupProps } from '../../types'
import { Variant0, Variant1, Variant2 } from './variants/variants'

type ThemeModeRadioGroupFactoryVariant = Variant<0 | 1 | 2>

export const themeModeRadioGroupVariants = createComponentVariantsFactory<
  ThemeModeRadioGroupFactoryVariant,
  ThemeModeRadioGroupProps
>(
  {
    'variant-0': { component: Variant0 },
    'variant-1': { component: Variant1 },
    'variant-2': { component: Variant2 },
  } as const satisfies FactoryComponentVariantsConfig<
    ThemeModeRadioGroupFactoryVariant,
    ThemeModeRadioGroupProps
  >,
  'variant-1'
)
