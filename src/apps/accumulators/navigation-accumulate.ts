// src/apps/navigation-accumulate.ts

import type { NavigationSectionKey } from '@global/libs/navigation'

import { navigationPproject0 } from '@apps/project-0/navigation'
import { navigationDashboard01 } from '@apps/dashboard-01/navigation'
import { navigationUi } from '@apps/ui/shared/navigation'

export const navigationAccumulate = {
  application: [],
  author: [],
  projects: [],
  development: [navigationUi, navigationPproject0, navigationDashboard01],
} as const satisfies Record<NavigationSectionKey, string[]>
