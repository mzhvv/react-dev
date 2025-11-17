// src/apps/dashboard-01/navigation.tsx

import type { NavigationLink } from '@global/libs/navigation'
import type { ParentRoutePath } from '@apps/dashboard-01/types/router-and-navigation'

export const navigationDashboard01 = [
  { path: '/dashboard-01', title: 'dashboard-01' },
] as const satisfies NavigationLink<ParentRoutePath>[]
