// src/apps/navigation-accumulate.ts

import type { NavigationAccumulate } from '@global/libs/navigation'

import { navigationPproject01 } from './project-01'
import { navigationDashboard01 } from './dashboard-01'

export const navigationAccumulate = {
  application: [],
  author: [],
  projects: [],
  development: [...navigationPproject01],
  secondary: [...navigationDashboard01],
} as const satisfies NavigationAccumulate
