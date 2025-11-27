// src/apps/__accumulators__/navigation.ts

import type { AppsDomainNavigation } from '@accumulators/types'

import { templateAppDomainNavigation } from '@template-app'

export const appsDomainNavigation = {
  application: [],
  author: [],
  projects: [],
  development: [...templateAppDomainNavigation],
} as const satisfies AppsDomainNavigation
