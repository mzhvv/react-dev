// src/apps/__template-app-experience__/shared/constants/index.ts

// import { useTranslation } from 'react-i18next'

import type {
  ConstantsNavigationDomainLink,
  ConstantsNavigation,
  ConstantsAPI,
} from '../../shared/types/prnc'

function useConstantsNavigation() {
  // const { t } = useTranslation()

  const domainLinks = {
    '/template-app-experience': {
      relativePath: 'template-app-experience',
      absolutePath: '/template-app-experience',
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
