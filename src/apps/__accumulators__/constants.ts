// src/apps/__accumulators__/constants.ts

import type { AppsConstantsDomainNavigationLink } from '@accumulators/types'

import { templateAppConstantsAPI } from '@template-app'

interface ConstantsAPI {
  navigation: {
    domainLinks: AppsConstantsDomainNavigationLink
  }
}

export function constantsAPI() {
  const templateAppConstantsNavigation = templateAppConstantsAPI.navigation()

  return {
    navigation: {
      domainLinks: {
        ...templateAppConstantsNavigation.domainLinks,
      },
    },
  } as const satisfies ConstantsAPI
}
