// src/react-dev/app/router.tsx
import type { RouteObject } from '@router'

import type { Path } from '@react-dev/shared/types'
import { ReactDevLayout } from '@react-dev/widgets/react-dev-layout'
import { HomePage } from '@react-dev/pages/home'
import { AboutPage } from '@react-dev/pages/about'
import { CollaborationPage } from '@react-dev/pages/collaboration'

export const routesReactDev = {
  path: undefined,
  element: <ReactDevLayout />,
  children: [
    {
      path: '/', // index: true,
      element: <HomePage />,
    },
    {
      path: 'about',
      element: <AboutPage />,
    },
    {
      path: 'collaboration',
      element: <CollaborationPage />,
    },
  ] as const satisfies RouteObject<Path>[],
} as const satisfies RouteObject
