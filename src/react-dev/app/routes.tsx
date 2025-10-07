// src/react-dev/app/router.tsx

import type { RouteObject } from 'react-router'

import { ReactDevPage } from '@/react-dev/pages/react-dev'
import { ReactDevLayout } from '@/react-dev/widgets/react-dev-layout'

export const routesReactDev = {
  path: '/',
  element: <ReactDevLayout />,
  children: [
    {
      index: true,
      element: <ReactDevPage />,
    },
  ],
} as const satisfies RouteObject
