// src/react-dev/features/i18n/types.ts

export type Language = 'ru' | 'en'
export type LanguagesMap<T> = Record<Language, T>

// useLocalization

export type LocalizationLanguages = {
  currentLanguage: Language
  handleLanguageChange: (value: Language) => void
  languages: Array<Language>
}

// useLocalizationUI

export type LocalizationLanguagesUI = {
  localizationLanguagesUi: {
    state: {
      value: LocalizationLanguages['currentLanguage']
      onValueChange: LocalizationLanguages['handleLanguageChange']
    }
    options: LocalizationLanguages['languages']
  }
}

// constants

export type LocalizationConstant = {
  heading: string
}

export type LocalizationLanguagesConstant = {
  legend: string
  optionMap: Record<
    Language,
    {
      label: string
      ariaLabel: string
      title: string
    }
  >
}

export type LocalizationConstants = {
  localization: LocalizationConstant
  language: LocalizationLanguagesConstant
}

// ui

export type LocalizationRadioGroupProps = LocalizationLanguagesUI & {
  CONSTANTS: LocalizationConstants['language']['optionMap']
}
