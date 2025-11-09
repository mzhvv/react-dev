// src/react-dev/features/theme/ui/color-radio-group/index.ts

import type { Variant as V } from '@react-dev/shared/types'

import type { FactoryComponentVariantsConfig } from '@factories/component-variants'
import { createComponentVariantsFactory } from '@factories/component-variants'

import type { ThemeColorRadioGroupProps } from '../../types'

import { Variant0, Variant1 } from './variants/variants'
import { ThemeColorRadioGroup as Variant3 } from './variants/variant-3'

type ThemeColorRadioGroupFactoryVariant = V<0 | 1 | 3>

export const themeColorRadioGroupVariants = createComponentVariantsFactory<
  ThemeColorRadioGroupFactoryVariant,
  ThemeColorRadioGroupProps
>(
  {
    'variant-0': { component: Variant0 },
    'variant-1': { component: Variant1 },

    'variant-3': { component: Variant3 },
  } satisfies FactoryComponentVariantsConfig<
    ThemeColorRadioGroupFactoryVariant,
    ThemeColorRadioGroupProps
  >,
  'variant-0'
)
