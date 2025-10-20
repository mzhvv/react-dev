// src/react-dev/features/theme/ui/color-radio-group/index.ts

import type { FactoryComponentVariantsConfig } from '@factories/component-variants'
import { createComponentVariantsFactory } from '@factories/component-variants'

import type { ColorRadioGroupProps } from '../../types'

import { ColorRadioGroup } from './variants/variant-0'

type Variant = '0'
export const colorRadioGroupVariants = createComponentVariantsFactory<
  Variant,
  ColorRadioGroupProps
>(
  {
    '0': { component: ColorRadioGroup },
  } satisfies FactoryComponentVariantsConfig<Variant, ColorRadioGroupProps>,
  '0'
)
