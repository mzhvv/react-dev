// src/apps/home/app/route.tsx

import { Outlet } from 'react-router'
import { routesBuilder } from '@mzhvv/routers/react-router/route'
import type { HomeRouteConfig } from '@apps/home/shared/types/route'

const homeRouteConfig = {
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

export const homeRoute = routesBuilder(homeRouteConfig)
