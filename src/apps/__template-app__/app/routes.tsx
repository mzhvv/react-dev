// src/apps/__template-app__/app/routes.tsx

import type { RouteObject } from 'react-router'
import type { DomainRoutes } from '@apps/__template-app__/shared/types/prnc'

const domainRoutes = {
  templateApp: {
    path: 'template-app',
    lazy: () =>
      import('../pages/template-app').then(module => ({
        Component: module.TemplateApp,
      })),
  },
} as const satisfies DomainRoutes

export const routes = [...Object.values(domainRoutes)] as const satisfies RouteObject[]
