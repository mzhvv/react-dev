// src/apps/accumulators/navigation-accumulate.ts

import type { NavigationSectionKey } from '@global/navigation'

import { navigationDashboard01 } from '@apps/dashboard-01'
import { navigationPproject0 } from '@apps/project-0'
import { navigationUi } from '@apps/ui'

export const navigationAccumulate = {
  application: [],
  author: [],
  projects: [],
  development: [navigationUi, navigationPproject0, navigationDashboard01],
} as const satisfies Record<NavigationSectionKey, string[]>
