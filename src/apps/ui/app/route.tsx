// src/apps/ui/app/route.ts

import { Outlet } from 'react-router'

import { routesBuilder } from '@mzhvv/libs/routers/react-router/route'

import type { UiRouteConfig } from '../shared/types/route'
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
} as const satisfies UiRouteConfig

export const route = routesBuilder(routeConfig)
