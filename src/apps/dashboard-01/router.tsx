// src/apps/dashboard-01/router.tsx

import type { RouteObject } from 'react-router'
import type { DomainRouteObject } from '@global/router'
import type { DomainRoutePath } from '@apps/dashboard-01/types'

type Dashboard01Routes = DomainRouteObject<DomainRoutePath>

export const dashboard01Routes = [
  {
    path: 'dashboard-01',
    lazy: () =>
      import('./page').then(module => ({
        Component: module.Dashboard01Page,
      })),
  } as const satisfies Dashboard01Routes,
] as const satisfies RouteObject[]
