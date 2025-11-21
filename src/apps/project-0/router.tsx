// src/apps/project-0/router.tsx

import type { RouteObject } from 'react-router'
import type { DomainRouteObject } from '@react-dev/__global__/router'
import type { DomainRoutePath } from '@apps/project-0/types'

type Project0Routes = DomainRouteObject<DomainRoutePath>

export const project0Routes = [
  {
    path: 'project-0',
    lazy: () =>
      import('./page').then(module => ({
        Component: module.Project0Page,
      })),
  } as const satisfies Project0Routes,
] as const satisfies RouteObject[]
