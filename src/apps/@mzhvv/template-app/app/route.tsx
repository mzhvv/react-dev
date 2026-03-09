// src/apps/@mzhvv/template-app/app/route.tsx

import { Outlet } from 'react-router'

import { routesBuilder } from '@mzhvv/libs/routers/react-router/route'

import type { TemplateAppRouteConfig } from '../shared/types/route'

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
} as const satisfies TemplateAppRouteConfig

export const route = routesBuilder(routeConfig)
