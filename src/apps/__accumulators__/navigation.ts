// src/apps/__accumulators__/navigation.ts

import type { SectionNavigationKey } from '@react-dev/__global__/navigation'

import { dashboard01DomainNavigation } from '@apps/dashboard-01'
import { project0DomainNavigation } from '@apps/project-0'
import { uiDomainsNavigation } from '@apps/ui'

export const navigationAccumulate = {
  application: [],
  author: [],
  projects: [],
  development: [
    ...uiDomainsNavigation,
    ...project0DomainNavigation,
    ...dashboard01DomainNavigation,
  ],
} as const satisfies Record<SectionNavigationKey, string[]>
