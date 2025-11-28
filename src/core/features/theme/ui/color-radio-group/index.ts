// src/core/features/theme/ui/color-radio-group/index.ts

import type { Variant } from '@react-dev/shared/types'

import type { FactoryComponentVariantsConfig } from '@core/shared/libs/factories/component-variants'
import { createComponentVariantsFactory } from '@core/shared/libs/factories/component-variants'

import type { ThemeColorRadioGroupProps } from '../../types'
import { Variant0, Variant1, Variant2 } from './variants/variants'

type ThemeColorRadioGroupFactoryVariant = Variant<0 | 1 | 2>

export const themeColorRadioGroupVariants = createComponentVariantsFactory<
  ThemeColorRadioGroupFactoryVariant,
  ThemeColorRadioGroupProps
>(
  {
    'variant-0': { component: Variant0 },
    'variant-1': { component: Variant1 },
    'variant-2': { component: Variant2 },
  } as const satisfies FactoryComponentVariantsConfig<
    ThemeColorRadioGroupFactoryVariant,
    ThemeColorRadioGroupProps
  >,
  'variant-1'
)
