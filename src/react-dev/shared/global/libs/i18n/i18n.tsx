// src/react-dev/shared/global/libs/i18n/i18n.tsx

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

type I18nNSs = 'common' | 'test'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: 'en',
    defaultNS: 'common' satisfies I18nNSs,
    ns: ['common', 'test'] satisfies Array<I18nNSs>,

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    react: {
      useSuspense: true,
    },
  })

export default i18n
