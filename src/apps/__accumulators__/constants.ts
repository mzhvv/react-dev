// src/apps/__accumulators__/constants.ts

import type { ConstantsAPIAccumulate } from '@accumulators/types'
import { templateAppConstantsAPI } from '@template-app'

export function constantsAPIAccumulate() {
  const templateAppConstantsNavigation = templateAppConstantsAPI.navigation()

  return {
    navigation: {
      domainLinks: {
        ...templateAppConstantsNavigation.domainLinks,
      },
    },
  } as const satisfies ConstantsAPIAccumulate
}
