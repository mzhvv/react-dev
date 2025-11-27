// src/apps/__accumulators__/navigation.ts

import type { SectionNavigationKey } from '@libs/navigation'
import type { AppsDomainNavigation } from '@accumulators/types'

import { templateAppDomainNavigation } from '@template-app'

type NavigationAccumulate = Record<SectionNavigationKey, AppsDomainNavigation[]>

export const navigationAccumulate = {
  application: [],
  author: [],
  projects: [],
  development: [...templateAppDomainNavigation],
} as const satisfies NavigationAccumulate
