// src/apps/__template-app__/shared/constants/use-navigation.tsx

import type { DomainNavigationLinks } from '@apps/__template-app__/shared/types/rnc'

export function useNavigationConstants() {
  const DOMAIN_NAVIGATION_LINKS = {
    '/template-app': {
      relativePath: 'template-app',
      absolutePath: '/template-app',
      title: 'template-app',
    },
  } as const satisfies DomainNavigationLinks

  return {
    DOMAIN_NAVIGATION_LINKS,
  } as const
}
