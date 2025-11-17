// src/apps/project-0/router.tsx

import type { RouteObject } from 'react-router'
import type { ParentRouteObject } from '@global/libs/router/types'
import type { ParentRoutePath } from '@apps/project-0/types/router-and-navigation'

export const routesPproject0 = [
  {
    path: 'project-0',
    lazy: () =>
      import('./page').then(module => ({
        Component: module.Project0Page,
      })),
  } as const satisfies ParentRouteObject<ParentRoutePath>,
] as const satisfies RouteObject[]
