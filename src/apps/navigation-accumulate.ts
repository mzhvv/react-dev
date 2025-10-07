// src/apps/navigation-accumulate.ts

import type { NavigationAccumulate } from '@navigation'

import { navigationPproject01 } from './project-01'
import { navigationDashboard01 } from './dashboard-01'

export const navigationAccumulate = {
  application: [],
  // application: [...navigationReactDev], - Циклическая зависимость! ✅
  author: [],
  projects: [],
  development: [...navigationPproject01],
  secondary: [...navigationDashboard01],
} as const satisfies NavigationAccumulate
