// src/apps/home/app/route.tsx

import { Outlet } from 'react-router'

import type { RouteConfig } from '@home/shared/types/route'
import { routesBuilder } from '@mzhvv/libs/routers/react-router/route'

import { HomePage } from '../pages'

const routeConfig = {
  homeLayout: {
    path: undefined,
    element: <Outlet />,
    children: {
      homePage: {
        path: '/',
        element: <HomePage />,
      },
    },
  },
} as const satisfies RouteConfig

export const route = routesBuilder(routeConfig)
