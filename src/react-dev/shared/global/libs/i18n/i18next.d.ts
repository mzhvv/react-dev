// src/react-dev/shared/global/libs/i18n/i18next.d.ts

import commonEN from '../../../../../../public/locales/en/common.json'
import testEN from '../../../../../../public/locales/en/test.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: {
      common: typeof commonEN
      test: typeof testEN
    }
  }
}
