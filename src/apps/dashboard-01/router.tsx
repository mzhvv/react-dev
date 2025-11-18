// src/apps/dashboard-01/router.tsx

import type { RouteObject } from 'react-router'
import type { ParentRouteObject } from '@react-dev/global/router'

import type { ParentRoutePath } from '@apps/dashboard-01/types/router-and-navigation'

export const routesDashboard01 = [
  {
    path: 'dashboard-01',
    lazy: () =>
      import('./page').then(module => ({
        Component: module.Dashboard01Page,
      })),
  } as const satisfies ParentRouteObject<ParentRoutePath>,
] as const satisfies RouteObject[]
