// src/apps/ui/app/router.tsx

import type { RouteObject } from 'react-router'
import type { LayoutRouteObject, PageRouteObject, IndexDomainRouteObject } from '@global/router'
import type { PageRouteKey, PageRoutePath, DomainRoutePath } from '@apps/ui/shared/types'

import { UiLayout } from '@apps/ui/pages/ui-layout'
import { UiPage } from '@apps/ui/pages/ui'
import { RadioGroupSection } from '@apps/ui/widgets/radio-group-section'

type UiDomainLayout = LayoutRouteObject<DomainRoutePath>
type UiDomainRoutes = IndexDomainRouteObject
type UiPagesRoutes = Record<PageRouteKey, PageRouteObject<PageRoutePath>>

export const uiPagesRoutes = {
  radioGroup: {
    path: 'radio-group',
    element: <RadioGroupSection />,
  },
} as const satisfies UiPagesRoutes

export const uiRoutes = [
  {
    path: 'ui',
    element: <UiLayout />,
    children: [
      {
        index: true,
        element: <UiPage />,
      } as const satisfies UiDomainRoutes,
      {
        path: 'radio-group',
        element: <RadioGroupSection />,
      },
    ],
  } as const satisfies UiDomainLayout,
] as const satisfies RouteObject[]
