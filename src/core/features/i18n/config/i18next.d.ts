// src/core/features/i18n/config/i18next.d.ts

import commonRU from '@public/locales/ru/common.json'
import settingsRU from '@public/locales/ru/settings.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: {
      common: typeof commonRU
      settings: typeof settingsRU
    }
  }
}
