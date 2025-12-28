// src/apps/__accumulators__/navigation.ts

import type { AppsDomainNavigation } from '@apps/accumulators/types'
import { templateAppDomainNavigation } from '@template-app'
import { templateAppExperienceDomainNavigation } from '@template-app-experience'

export const appsDomainNavigation = {
  application: [],
  author: [],
  projects: [],
  development: [...templateAppExperienceDomainNavigation, ...templateAppDomainNavigation],
} as const satisfies AppsDomainNavigation
