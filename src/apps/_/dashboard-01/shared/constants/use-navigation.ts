// src/apps/dashboard-01/shared/constants/use-navigation.ts

import type { Constants, ConstantsDomainNavigationLink } from '@apps/dashboard-01/shared/types/prnc'

export function useConstants() {
  const DOMAIN_NAVIGATION_LINKS = {
    '/dashboard-01': {
      relativePath: 'dashboard-01',
      absolutePath: '/dashboard-01',
      title: 'dashboard-01',
    },
  } as const satisfies ConstantsDomainNavigationLink

  return {
    DOMAIN_NAVIGATION_LINKS,
  } as const satisfies Constants
}
