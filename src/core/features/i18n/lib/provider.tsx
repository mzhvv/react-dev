// src/core/features/i18n/lib/provider.tsx

import { useEffect } from 'react'
import { I18nextProvider as I18nextProvider0 } from 'react-i18next'

import i18n from '../config/i18n'
import { updateHtmlLang } from './update-html-lang'

export const I18nextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const cleanup = updateHtmlLang()
    return cleanup
  }, [])

  return <I18nextProvider0 i18n={i18n}>{children}</I18nextProvider0>
}
