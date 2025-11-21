// src/apps/project-0/shared/constants/use-navigation.tsx

import type { DomainNavigationLinks } from '@apps/project-0/shared/types/rnc'

export function useNavigationConstants() {
  const DOMAIN_NAVIGATION_LINKS = {
    '/project-0': {
      relativePath: 'project-0',
      absolutePath: '/project-0',
      title: 'project-0',
    },
  } as const satisfies DomainNavigationLinks

  return {
    DOMAIN_NAVIGATION_LINKS,
  } as const
}
