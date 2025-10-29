// src/apps/dashboard-01/router.tsx

import type { RouteObject } from '@global/libs/router'

import type { Path } from './types'

export const routesDashboard01 = [
  {
    path: 'dashboard-01',
    lazy: () =>
      import('./page').then(module => ({
        Component: module.Dashboard01Page,
      })),
    children: [],
  },
] as const satisfies RouteObject<Path>[]
