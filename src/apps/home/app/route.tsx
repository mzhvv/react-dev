// src/apps/home/app/route.tsx

import { Outlet } from 'react-router'

import type { AppsRouteObject } from '@mzhvv/framework/acc-agg'
import { routesBuilder } from '@mzhvv/libs/routers/react-router/route'

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

export const homeRoute = routesBuilder<HomeRouteConfig, AppsRouteObject>(homeRouteConfig)
