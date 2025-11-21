// src/apps/dashboard-01/app/routes.tsx

import type { RouteObject } from 'react-router'
import type { DomainRoutes } from '@apps/dashboard-01/shared/types/rnc'

const DomainRoutes = {
  dashboard01: {
    path: 'dashboard-01',
    lazy: () =>
      import('../page').then(module => ({
        Component: module.Dashboard01,
      })),
  },
} as const satisfies DomainRoutes

export const Routes = [...Object.values(DomainRoutes)] as const satisfies RouteObject[]
