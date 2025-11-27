// src/apps/__template-app__/shared/constants/index.ts

// import { useTranslation } from 'react-i18next'

import type {
  ConstantsNavigationDomainLink,
  ConstantsNavigation,
  ConstantsAPI,
} from '@template-app/shared/types/prnc'

function useConstantsNavigation() {
  // const { t } = useTranslation()

  const domainLinks = {
    '/template-app': {
      relativePath: 'template-app',
      absolutePath: '/template-app',
      title: 'template-app', // t('')
    },
  } as const satisfies ConstantsNavigationDomainLink

  return {
    domainLinks,
  } as const satisfies ConstantsNavigation
}

export const constantsAPI = {
  navigation: useConstantsNavigation,
} as const satisfies ConstantsAPI
