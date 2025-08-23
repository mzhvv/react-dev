// src/shared/lib/i18n/provider.tsx

import { I18nextProvider as I18nextProviderLib } from 'react-i18next'

import i18n from './i18n'
import { useUpdateHtmlLang } from './use-update-html-lang'

export const I18nextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useUpdateHtmlLang()
  return <I18nextProviderLib i18n={i18n}>{children}</I18nextProviderLib>
}
