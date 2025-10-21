// src/apps/navigation-accumulate.ts

import type { NavigationAccumulate } from '@global/libs/navigation'

import { navigationPproject0 } from './project-0'
import { navigationDashboard01 } from './dashboard-01'

export const navigationAccumulate = {
  application: [],
  author: [],
  projects: [],
  development: [...navigationPproject0, ...navigationDashboard01],
} as const satisfies NavigationAccumulate
