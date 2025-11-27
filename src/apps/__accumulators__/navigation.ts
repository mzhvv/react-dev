// src/apps/__accumulators__/navigation.ts

import type { DomainNavigationAccumulate } from '@accumulators/types'
import { templateAppDomainNavigation } from '@template-app'

export const domainNavigationAccumulate = {
  application: [],
  author: [],
  projects: [],
  development: [...templateAppDomainNavigation],
} as const satisfies DomainNavigationAccumulate
