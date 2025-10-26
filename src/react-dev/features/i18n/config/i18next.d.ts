// src/react-dev/features/i18n/config/i18next.d.ts

import commonRU from '@public/locales/ru/common.json'
import testRU from '@public/locales/ru/test.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: {
      common: typeof commonRU
      test: typeof testRU
    }
  }
}
