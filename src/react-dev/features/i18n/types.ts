// src/react-dev/features/i18n/types.ts

export type Language = 'ru' | 'en'
export type LanguagesMap<T> = Record<Language, T>

export type ReturnUseLanguageSwitcher = {
  currentLang: Language
  languages: Array<Language>
  handleLanguageChange: (value: Language) => void
}
export type LanguageSwitcherRadioVariantsProps = ReturnUseLanguageSwitcher
