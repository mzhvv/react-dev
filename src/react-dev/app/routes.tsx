// src/react-dev/app/routes.tsx

import type { RouteObject } from 'react-router'

import type { ChildrenRouteObject, ParentRouteObject } from '@global/libs/router'

import type {
  ChildrenRouteKey,
  ChildrenRoutePaths,
  ParentRoutePath,
} from '@react-dev/shared/types/router-and-navigation'

import { ReactDevLayout } from '@react-dev/widgets/react-dev-layout'

import { HomePage } from '@react-dev/pages/home'
import { AboutPage } from '@react-dev/pages/about'
import { CollaborationPage } from '@react-dev/pages/collaboration'

export const pagesReactDev = {
  uiComponentVariants: {
    path: 'ui-component-variants',
    lazy: () =>
      import('../pages/ui-component-variants').then(module => ({
        Component: module.UiComponentVariantsPage,
      })),
  },
  about: { path: 'about', element: <AboutPage /> },
  collaboration: { path: 'collaboration', element: <CollaborationPage /> },
} as const satisfies Record<ChildrenRouteKey, ChildrenRouteObject<ChildrenRoutePaths>>

export const routesReactDev = {
  path: undefined,
  element: <ReactDevLayout />,
  children: [
    { path: '/', element: <HomePage /> } satisfies ParentRouteObject<ParentRoutePath>,
    ...Object.values(pagesReactDev),
  ], // satisfies RouteObject[],
} as const satisfies RouteObject
