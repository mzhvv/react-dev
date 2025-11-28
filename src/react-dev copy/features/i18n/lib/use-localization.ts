// src/react-dev/features/i18n/lib/use-language.ts

import { useTranslation } from 'react-i18next'
import type { Language, LocalizationLanguages, LocalizationLanguagesUI } from '../types'

export const useLocalization = (): LocalizationLanguages => {
  const { i18n } = useTranslation()

  const currentLanguage: Language = i18n.language.startsWith('ru') ? 'ru' : 'en'

  const languages: Language[] = ['ru', 'en']

  const handleLanguageChange = (value: Language) => {
    i18n.changeLanguage(value)
  }

  return {
    currentLanguage,
    languages,
    handleLanguageChange,
  }
}

export function useLocalizationUi(): LocalizationLanguagesUI {
  const { currentLanguage, languages, handleLanguageChange } = useLocalization()

  return {
    localizationLanguagesUi: {
      state: {
        value: currentLanguage,
        onValueChange: handleLanguageChange,
      },
      options: languages,
    },
  }
}
