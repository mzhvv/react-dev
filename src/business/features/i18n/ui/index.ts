// src/core/features/i18n/ui/index.ts

import type { Variant } from '@mzhvv/libs/_/factories/types/shared'

import type { FactoryComponentVariantsConfig } from '@mzhvv/libs/_/factories/component-variants'
import { createComponentVariantsFactory } from '@mzhvv/libs/_/factories/component-variants'

import type { LocalizationRadioGroupProps } from '../types'

import { LocalizationLanguageRadioGroup as Variant0 } from './variants/variant-0'
import { LocalizationLanguageRadioGroup as Variant1 } from './variants/variant-1'

type Variants = Variant<0 | 1>

export const localizationLanguageRadioGroupVariants = createComponentVariantsFactory<
  Variants,
  LocalizationRadioGroupProps
>(
  {
    'variant-0': { component: Variant0 },
    'variant-1': { component: Variant1 },
  } satisfies FactoryComponentVariantsConfig<Variants, LocalizationRadioGroupProps>,
  'variant-0'
)
