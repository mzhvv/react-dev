import type { NavigationLinkObject } from '@navigation'

import type { Path } from './types'

export const navigationDashboard01 = [
  { path: '/dashboard-01', title: 'dashboard-01' },
] as const satisfies NavigationLinkObject<Path>[]
