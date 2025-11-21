// src/apps/project-01/shared/constants/use-navigation.tsx

import type { DomainNavigationLinks } from '@apps/project-01/shared/types/rnc'

export function useNavigationConstants() {
  const DOMAIN_NAVIGATION_LINKS = {
    '/project-01': {
      relativePath: 'project-01',
      absolutePath: '/project-01',
      title: 'project-01',
    },
  } as const satisfies DomainNavigationLinks

  return {
    DOMAIN_NAVIGATION_LINKS,
  } as const
}
