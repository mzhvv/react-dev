// src/apps/project-01/app/routes.tsx

import type { RouteObject } from 'react-router'
import type { DomainRoutes } from '@apps/project-01/shared/types/rnc'

const domainRoutes = {
  project01: {
    path: 'project-01',
    lazy: () =>
      import('../pages/project-01').then(module => ({
        Component: module.Project01,
      })),
  },
} as const satisfies DomainRoutes

export const routes = [...Object.values(domainRoutes)] as const satisfies RouteObject[]
