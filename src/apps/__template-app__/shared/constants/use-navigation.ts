// src/apps/__template-app__/shared/constants/use-navigation.ts

import type {
  Constants,
  ConstantsDomainNavigationLink,
  ConstantsNavigationLink,
} from '@apps/__template-app__/shared/types/prnc'

export function useConstants() {
  const DOMAIN_NAVIGATION_LINKS = {
    '/template-app': {
      relativePath: 'template-app',
      absolutePath: '/template-app',
      title: 'template-app',
    },

    // тут может быть 100+
  } as const satisfies ConstantsDomainNavigationLink

  const NAVIGATION_LINKS = {
    ...DOMAIN_NAVIGATION_LINKS,

    // тут может быть 100+
  } as const satisfies ConstantsNavigationLink

  return {
    NAVIGATION_LINKS,

    DOMAIN_NAVIGATION_LINKS,
  } as const satisfies Constants
}
