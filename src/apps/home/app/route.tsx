// src/apps/home/app/route.tsx

import { Outlet } from 'react-router'

import { routesBuilder } from '@mzhvv/libs/routers/react-router/route'

import type { HomeRouteConfig } from '@home/shared/types/route'

const routeConfig = {
  homeLayout: {
    path: undefined,
    element: <Outlet />,
    children: {
      homePage: {
        path: '/',
        element: (
          <div>
            <span>react-dev</span>
          </div>
        ),
      },
    },
  },
} as const satisfies HomeRouteConfig

export const route = routesBuilder(routeConfig)
