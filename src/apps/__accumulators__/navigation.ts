// src/apps/__accumulators__/navigation.ts

import type { SectionNavigationKey } from '@libs/navigation'

// import { uiDomainsNavigation } from '@apps/ui'
import { dashboard01DomainNavigation } from '@apps/dashboard-01'

export const navigationAccumulate = {
  application: [],
  author: [],
  projects: [],
  development: [
    // ...uiDomainsNavigation,
    ...dashboard01DomainNavigation,
  ],
} as const satisfies Record<SectionNavigationKey, string[]>
