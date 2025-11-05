// src/react-dev/features/theme/ui/color-radio-group/index.ts

import type { Variant as V } from '@react-dev/shared/types'

import type { FactoryComponentVariantsConfig } from '@factories/component-variants'
import { createComponentVariantsFactory } from '@factories/component-variants'

import type { ThemeColorRadioGroupProps } from '../../types'

import { ThemeColorRadioGroup as Variant0 } from './variants/variant-0'

type ThemeColorRadioGroupFactoryVariant = V<0>

export const themeColorRadioGroupVariants = createComponentVariantsFactory<
  ThemeColorRadioGroupFactoryVariant,
  ThemeColorRadioGroupProps
>(
  {
    'variant-0': { component: Variant0 },
  } satisfies FactoryComponentVariantsConfig<
    ThemeColorRadioGroupFactoryVariant,
    ThemeColorRadioGroupProps
  >,
  'variant-0'
)
