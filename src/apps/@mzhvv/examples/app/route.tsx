// src/apps/@mzhvv/examples/app/route.tsx

import type { RouteObject } from 'react-router'
import { Outlet } from 'react-router'

import { looseTypesRoute } from '@examples/__examples__/routers/react-router/loose-typed'

export const examplesRoute = {
  path: 'mzhvv/examples',
  element: <Outlet />,
  children: [
    {
      path: 'routers',
      element: <Outlet />,
      children: [
        {
          path: 'react-router',
          element: <Outlet />,
          children: [looseTypesRoute],
        },
      ],
    },
  ],
} as const satisfies RouteObject
