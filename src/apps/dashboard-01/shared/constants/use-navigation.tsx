// src/apps/dashboard-01/shared/constants/use-navigation.tsx

import type { DomainNavigationLinks } from '@apps/dashboard-01/shared/types/rnc'

export function useNavigationConstants() {
  const DOMAIN_NAVIGATION_LINKS = {
    '/dashboard-01': {
      relativePath: 'dashboard-01',
      absolutePath: '/dashboard-01',
      title: 'dashboard-01',
    },
  } as const satisfies DomainNavigationLinks

  return {
    DOMAIN_NAVIGATION_LINKS,
  } as const
}
