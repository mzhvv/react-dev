// src/apps/ui/app/route.ts

import { Outlet } from 'react-router'

import { routesBuilder } from '@mzhvv/libs/routers/react-router/route'

import type { DocumentationRouteConfig } from '../shared/types/route'
import { DocumentationPage } from '../pages'

const routeConfig = {
  homeLayout: {
    path: undefined,
    element: <Outlet />,
    children: {
      homePage: {
        path: 'documentation',
        element: <DocumentationPage />,
      },
    },
  },
} as const satisfies DocumentationRouteConfig

export const route = routesBuilder(routeConfig)
