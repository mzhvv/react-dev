// src/react-dev/features/i18n/lib/use-language.ts

import { useTranslation } from 'react-i18next'
import type { ReturnUseLanguageSwitcher, Language } from '../types'

export const useLanguageSwitcher = (): ReturnUseLanguageSwitcher => {
  const { i18n } = useTranslation()

  const currentLang: Language = i18n.language.startsWith('ru') ? 'ru' : 'en'

  const languages: Language[] = ['ru', 'en']

  const handleLanguageChange = (value: Language) => {
    i18n.changeLanguage(value)
  }

  return {
    currentLang,
    languages,
    handleLanguageChange,
  }
}
