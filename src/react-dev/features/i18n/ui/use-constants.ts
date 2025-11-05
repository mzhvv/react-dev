// src/react-dev/features/i18n/ui/constants.ts

import { useTranslation } from 'react-i18next'
import type {
  LocalizationConstants,
  LocalizationConstant,
  LocalizationLanguagesConstant,
} from '../types'

export function useLocalizationConstants(): LocalizationConstants {
  const { t } = useTranslation('settings')

  const localization = {
    heading: t('settings.localization.heading'),
  } as const satisfies LocalizationConstant

  const language = {
    legend: t('settings.localization.language.legend'),
    optionMap: {
      ru: {
        label: 'RU',
        ariaLabel: 'Переключить на Русский',
        title: 'Русский',
      },
      en: {
        label: 'EN',
        ariaLabel: 'Switch to English',
        title: 'English',
      },
    },
  } as const satisfies LocalizationLanguagesConstant

  const localizationConstants = {
    localization,
    language,
  } as const

  return localizationConstants
}
