// src/react-dev/shared/global/libs/i18n/provider.tsx

import { I18nextProvider as I18nextProvider0 } from 'react-i18next'

import i18n from './i18n'
import { updateHtmlLang } from './update-html-lang'

export const I18nextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  updateHtmlLang()
  return <I18nextProvider0 i18n={i18n}>{children}</I18nextProvider0>
}
