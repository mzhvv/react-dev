// src/core/features/i18n/config/i18n.ts

import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

type I18nNSs = 'common' | 'settings'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',

    defaultNS: 'common' satisfies I18nNSs,
    ns: ['common', 'settings'] satisfies Array<I18nNSs>,
    // fallbackNS: ['common', 'settings'] satisfies Array<I18nNSs>,

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    react: {
      useSuspense: true,
    },
  })

export default i18n
