// src/apps/new-app/app/routes.tsx

import type { RouteObject } from 'react-router'
import type { DomainRoutes } from '@apps/new-app/shared/types/rnc'

const domainRoutes = {
  newApp: {
    path: 'new-app',
    lazy: () =>
      import('../page').then(module => ({
        Component: module.NewApp,
      })),
  },
} as const satisfies DomainRoutes

export const routes = [...Object.values(domainRoutes)] as const satisfies RouteObject[]
