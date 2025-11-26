// src/apps/__accumulators__/navigation.ts

import type { SectionNavigationKey } from '@libs/navigation'
import type { AppsDomainNavigation } from '@accumulators/types'

import { templateAppDomainNavigation } from '@apps/__template-app__'
import { uiDomainsNavigation } from '@apps/ui'
import { dashboard01DomainNavigation } from '@apps/dashboard-01'

type NavigationAccumulate = Record<SectionNavigationKey, AppsDomainNavigation[]>

export const navigationAccumulate = {
  application: [],
  author: [],
  projects: [],
  development: [
    ...templateAppDomainNavigation,
    ...uiDomainsNavigation,
    ...dashboard01DomainNavigation,
  ],
} as const satisfies NavigationAccumulate
