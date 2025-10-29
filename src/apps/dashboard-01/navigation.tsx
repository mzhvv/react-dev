// src/apps/dashboard-01/navigation.tsx

import type { NavigationLink } from '@global/libs/navigation'

import type { Path } from './types'

export const navigationDashboard01 = [
  { path: '/dashboard-01', title: 'dashboard-01' },
] as const satisfies NavigationLink<Path>[]
