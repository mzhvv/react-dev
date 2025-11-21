// src/apps/new-app/shared/constants/use-navigation.tsx

import type { DomainNavigationLinks } from '@apps/new-app/shared/types/rnc'

export function useNavigationConstants() {
  const DOMAIN_NAVIGATION_LINKS = {
    '/new-app': {
      relativePath: 'new-app',
      absolutePath: '/new-app',
      title: 'new-app',
    },
  } as const satisfies DomainNavigationLinks

  return {
    DOMAIN_NAVIGATION_LINKS,
  } as const
}
