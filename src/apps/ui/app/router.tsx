// src/apps/ui/app/router.tsx

import type { RouteObject } from 'react-router'
import type { ChildrenRouteObject, ParentRouteObject } from '@global/libs/router/types'
import type {
  ChildrenRouteKey,
  ChildrenRoutePaths,
  ParentRoutePath,
} from '@apps/ui/shared/types/router-and-navigation'

import { UiLayout } from '@apps/ui/pages/ui-layout'
import { UiListPage } from '@apps/ui/pages/ui-list'

import { RadioGroupSection } from '@apps/ui/widgets/radio-group-section'

export const pagesUi = {
  radioGroup: {
    path: 'radio-group',
    element: <RadioGroupSection />,
  },
} as const satisfies Record<ChildrenRouteKey, ChildrenRouteObject<ChildrenRoutePaths>>

export const routesUi = [
  {
    path: 'ui',
    element: <UiLayout />,
    children: [
      {
        index: true,
        element: <UiListPage />,
      },
      ...Object.values(pagesUi),
    ],
  } as const satisfies ParentRouteObject<ParentRoutePath>,
] as const satisfies RouteObject[]
