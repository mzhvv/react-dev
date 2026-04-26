// src/apps/settings/app/route.tsx

import { Outlet } from 'react-router'
import { routesBuilder } from '@packages/libs/routers/react-router/route'

import type { RouteConfig, RouteBuilt } from '../shared/types/route'
import { SettingsPage } from '../pages/settings'

const routeConfig = {
  homeLayout: {
    path: undefined,
    element: <Outlet />,
    children: {
      homePage: {
        path: 'settings',
        element: <SettingsPage />,
      },
    },
  },
} as const satisfies RouteConfig

export const route = routesBuilder(routeConfig) satisfies RouteBuilt
