// src/core/features/theme/ui/mode-radio-group/index.ts

import type { Variant } from '@mzhvv/libs/_/factories/types/shared'

import type { FactoryComponentVariantsConfig } from '@mzhvv/libs/_/factories/component-variants'
import { createComponentVariantsFactory } from '@mzhvv/libs/_/factories/component-variants'

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
