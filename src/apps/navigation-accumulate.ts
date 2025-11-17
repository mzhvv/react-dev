// src/apps/navigation-accumulate.ts

import type { NavigationAccumulate, NavigationLink } from '@global/libs/navigation'

import { navigationPproject0 } from './project-0'
import { navigationDashboard01 } from './dashboard-01'
import type { ParentRoutePath } from './ui'

export const navigationUi = {
  path: '/ui',
  title: 'ui',
} as const satisfies NavigationLink<ParentRoutePath>

export const navigationAccumulate = {
  application: [],
  author: [],
  projects: [],
  development: [navigationUi, ...navigationPproject0, ...navigationDashboard01],
} as const satisfies NavigationAccumulate
