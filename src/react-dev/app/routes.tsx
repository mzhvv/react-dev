// src/react-dev/app/routes.tsx

import type { RouteObject } from '@global/libs/router'
import type { Path } from '@react-dev/shared/libs/navigation'

import { ReactDevLayout } from '@react-dev/widgets/react-dev-layout'
import { UiVariantPage } from '@react-dev/pages/ui-variant'
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
      path: 'ui-variant',
      element: <UiVariantPage />,
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
