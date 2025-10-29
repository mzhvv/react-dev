// src/apps/project-0/router.tsx

import type { RouteObject } from '@global/libs/router'
import type { Path } from './types'

export const routesPproject0 = [
  {
    path: 'project-0',
    lazy: () =>
      import('./page').then(module => ({
        Component: module.Project0Page,
      })),
    children: [],
  },
] as const satisfies RouteObject<Path>[]
