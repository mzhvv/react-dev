// src/apps/__accumulators__/constants.ts

import type { AppsConstantsNavigationDomainLink } from '@accumulators/types'

import { templateAppConstantsAPI } from '@template-app'

export function appsConstantsNavigationDomainLink() {
  const templateAppConstantsNavigation = templateAppConstantsAPI.navigation()

  return {
    ...templateAppConstantsNavigation.domainLinks,
  } as const satisfies AppsConstantsNavigationDomainLink
}
