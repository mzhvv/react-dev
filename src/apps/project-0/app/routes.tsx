// src/apps/project-0/app/routes.tsx

import type { RouteObject } from 'react-router'
import type { DomainRoutes } from '@apps/project-0/shared/types/rnc'

const domainRoutes = {
  project0: {
    path: 'project-0',
    lazy: () =>
      import('../page').then(module => ({
        Component: module.Project0,
      })),
  },
} as const satisfies DomainRoutes

export const routes = [...Object.values(domainRoutes)] as const satisfies RouteObject[]
