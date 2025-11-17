// src/apps/dashboard-01/navigation.tsx

import type { NavigationParentPath } from '@global/libs/navigation'
import type { ParentRoutePath } from './types/router-and-navigation'

export const navigationDashboard01 =
  '/dashboard-01' as const satisfies NavigationParentPath<ParentRoutePath>
