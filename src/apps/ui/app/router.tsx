// src/apps/ui/app/router.tsx

import type { RouteObject } from 'react-router'
import type { ComponentsRoutes, SegmentRoutes, DomainRoutes } from '@apps/ui/shared/types'

import { UiLayout } from '@apps/ui/pages/ui-layout'
import { UiPage } from '@apps/ui/pages/ui'
import { RadioGroupSection } from '@apps/ui/widgets/radio-group-section'

const componentsRoutes = {
  radioGroup: {
    path: 'radio-group',
    element: <RadioGroupSection />,
  },
} as const satisfies ComponentsRoutes

const uiSegmentRoutes = {
  components: {
    path: 'components',
    element: <>componentsLayout</>,
    children: [
      {
        index: true,
        element: <>components</>,
        ...Object.values(componentsRoutes),
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
} as const satisfies SegmentRoutes

const domainRoutes = {
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
} as const satisfies DomainRoutes

export const routes = [...Object.values(domainRoutes)] as const satisfies RouteObject[]
