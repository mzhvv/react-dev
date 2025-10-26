// src/react-dev/features/i18n/ui/constants.ts

import type { LanguagesMap } from '../types'

export type LanguageInfo = {
  label: string
  ariaLabel: string
  title: string
}

export const languagesMap = {
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
} as const satisfies LanguagesMap<LanguageInfo>
