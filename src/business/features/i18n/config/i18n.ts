// src/core/features/i18n/config/i18n.ts

import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

type I18nNSs =
  | 'common'
  | 'settings'
  // | 'navigation'
  | 'mainNavigation'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',

    defaultNS: 'common' satisfies I18nNSs,
    ns: [
      'common',
      'settings',
      // 'navigation',
      'mainNavigation',
    ] satisfies Array<I18nNSs>,
    // fallbackNS: ['common', 'settings'] satisfies Array<I18nNSs>,

    backend: {
      // loadPath: '/locales/{{lng}}/{{ns}}.json'

      loadPath: (lngs: string[], ns: string[]) => {
        const lng = lngs[0]
        const nsName = ns[0]

        if (nsName === 'mainNavigation') {
          return `/locales/${lng}/main/${nsName.replace('main', '').toLowerCase()}.json`
        }
        return `/locales/${lng}/${nsName}.json`
      },
    },

    react: {
      useSuspense: true,
    },
  })

export default i18n
