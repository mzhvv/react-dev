// src/packages/framework/template-app/app/route.tsx

import { Outlet } from 'react-router'

import { routesBuilder } from '@packages/libs/routers/react-router/route'

import type { RouteConfig } from '../shared/types/route'

const routeConfig = {
  templateApp: {
    path: 'template-app',
    element: <Outlet />,
    children: {
      index: {
        index: true,
        element: (
          <div>
            <span>template-app</span>
          </div>
        ),
      },
    },
  },
} as const satisfies RouteConfig

export const route = routesBuilder(routeConfig)
