// src/apps/documentation/app/route.tsx

import { Outlet } from 'react-router'

import { routesBuilder } from '@mzhvv/libs/routers/react-router/route'

import type { RouteConfig } from '../shared/types/route'
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
} as const satisfies RouteConfig

export const route = routesBuilder(routeConfig)
