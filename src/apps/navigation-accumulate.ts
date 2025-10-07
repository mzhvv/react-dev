// src/apps/navigation-accumulate.ts

import type { NavigationAccumulate } from '@navigation'

import { navigationAboutReactDev } from './about-react-dev'
import { navigationCollaboration } from './collaboration'
import { navigationPproject01 } from './project-01'
import { navigationDashboard01 } from './dashboard-01'

export const navigationAccumulate = {
  application: [...navigationAboutReactDev],
  author: [...navigationCollaboration],
  projects: [],
  development: [...navigationPproject01],
  secondary: [...navigationDashboard01],
} as const satisfies NavigationAccumulate
