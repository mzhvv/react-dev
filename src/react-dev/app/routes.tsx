// src/react-dev/app/routes.tsx

import type { RouteObject } from 'react-router'
import type { RootRouteObject, LayoutRouteObject, DomainRouteObject } from '@global/router'
import type { RootRoutePath, DomainRouteKey, DomainRoutePath } from '@react-dev/shared/types'

import { ReactDevLayout } from '@react-dev/widgets/react-dev-layout'
import { ReactDevPage } from '@react-dev/pages/react-dev'
import { AboutPage } from '@react-dev/pages/about'
import { CollaborationPage } from '@react-dev/pages/collaboration'

type RootRoute = RootRouteObject<RootRoutePath>
type ReactDevDomainRoutes = Record<DomainRouteKey, DomainRouteObject<DomainRoutePath>>

export const reactDevDomainRoutes = {
  uiComponentVariants: {
    path: 'ui-component-variants',
    lazy: () =>
      import('../pages/ui-component-variants').then(module => ({
        Component: module.UiComponentVariantsPage,
      })),
  },
  about: { path: 'about', element: <AboutPage /> },
  collaboration: { path: 'collaboration', element: <CollaborationPage /> },
} as const satisfies ReactDevDomainRoutes

export const reactDevRoutes = [
  {
    path: undefined,
    element: <ReactDevLayout />,
    children: [
      { path: '/', element: <ReactDevPage /> } as const satisfies RootRoute,
      ...Object.values(reactDevDomainRoutes),
    ],
  } as const satisfies LayoutRouteObject,
] as const satisfies RouteObject[]
