// src/apps/ui/app/router.tsx

import type { RouteObject } from 'react-router'
import type { UiComponentsRoutes, UiSegmentRoutes, UiDomainRoutes } from '@apps/ui/shared/types'

import { UiLayout } from '@apps/ui/pages/ui-layout'
import { UiPage } from '@apps/ui/pages/ui'
import { RadioGroupSection } from '@apps/ui/widgets/radio-group-section'

const uiComponentsRoutes = {
  radioGroup: {
    path: 'radio-group',
    element: <RadioGroupSection />,
  },
} as const satisfies UiComponentsRoutes

const uiSegmentRoutes = {
  components: {
    path: 'components',
    element: <>componentsLayout</>,
    children: [
      {
        index: true,
        element: <>components</>,
        ...Object.values(uiComponentsRoutes),
      },
    ],
  },
  blocks: {
    path: 'blocks',
    element: <>blocksLayout</>,
    children: [
      {
        index: true,
        element: <>blocks</>,
      },
    ],
  },
} as const satisfies UiSegmentRoutes

const uiDomainRoutes = {
  ui: {
    path: 'ui',
    element: <UiLayout />,
    children: [
      {
        index: true,
        element: <UiPage />,
      },
      ...Object.values(uiSegmentRoutes),
    ],
  },
} as const satisfies UiDomainRoutes

export const uiRoutes = [...Object.values(uiDomainRoutes)] as const satisfies RouteObject[]
