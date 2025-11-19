// src/apps/ui/app/router.tsx

import type { RouteObject } from 'react-router'
import type { DomainRouteObject, PageRouteObject, LayoutRouteObject } from '@global/router'
import type { PageRouteKey, PageRoutePath, DomainRoutePath } from '@apps/ui/shared/types'

import { UiLayout } from '@apps/ui/pages/ui-layout'
import { UiPage } from '@apps/ui/pages/ui'
import { RadioGroupSection } from '@apps/ui/widgets/radio-group-section'

type UiRoutes = DomainRouteObject<DomainRoutePath>
type UiPagesRoutes = Record<PageRouteKey, PageRouteObject<PageRoutePath>>

export const uiPagesRoutes = {
  radioGroup: {
    path: 'radio-group',
    element: <RadioGroupSection />,
  },
} as const satisfies UiPagesRoutes

export const uiRoutes = [
  {
    path: undefined,
    element: <UiLayout />,
    children: [
      {
        path: 'ui',
        element: <UiPage />,
      } as const satisfies UiRoutes,
      ...Object.values(uiPagesRoutes),
    ],
  } as const satisfies LayoutRouteObject,
] as const satisfies RouteObject[]
