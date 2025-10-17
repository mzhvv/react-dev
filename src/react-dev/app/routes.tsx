// src/react-dev/app/routes.tsx

import type { RouteObject } from '@global/router'
import type { Path } from '@react-dev/shared/types'

import { ReactDevLayout } from '@react-dev/widgets/react-dev-layout'
import { UiPreviewPage } from '@react-dev/pages/ui-example'
import { HomePage } from '@react-dev/pages/home'
import { AboutPage } from '@react-dev/pages/about'
import { CollaborationPage } from '@react-dev/pages/collaboration'

export const routesReactDev = {
  path: undefined, //  path: '/'
  element: <ReactDevLayout />,
  children: [
    {
      path: '/', // index: true,
      element: <HomePage />,
    },
    {
      path: 'ui-example',
      element: <UiPreviewPage />,
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
