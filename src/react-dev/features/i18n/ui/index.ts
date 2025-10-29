// src/react-dev/features/i18n/ui/index.ts

import type { FactoryComponentVariantsConfig } from '@factories/component-variants'
import { createComponentVariantsFactory } from '@factories/component-variants'

import type { LanguageSwitcherRadioProps } from '../types'

import { LanguageSwitcherRadio as Variant0 } from './variants/variant-0'
import { LanguageSwitcherRadio as Variant1 } from './variants/variant-1'

type Variants = 'variant-0' | 'variant-1'

export const languageSwitcherRadioVariants = createComponentVariantsFactory<
  Variants,
  LanguageSwitcherRadioProps
>(
  {
    'variant-0': { component: Variant0 },
    'variant-1': { component: Variant1 },
  } satisfies FactoryComponentVariantsConfig<Variants, LanguageSwitcherRadioProps>,
  'variant-1'
)
