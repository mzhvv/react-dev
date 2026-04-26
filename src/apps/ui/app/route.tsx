// src/apps/ui/app/route.tsx

import { Outlet } from 'react-router'

import { routesBuilder } from '@packages/libs/routers/react-router/route'

import type { RouteConfig } from '../shared/types/route'
import { UiPage } from '../pages'

const routeConfig = {
  homeLayout: {
    path: undefined,
    element: <Outlet />,
    children: {
      homePage: {
        path: 'ui',
        element: <UiPage />,
      },
    },
  },
} as const satisfies RouteConfig

export const route = routesBuilder(routeConfig)
