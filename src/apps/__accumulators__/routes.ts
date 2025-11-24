// src/apps/__accumulators__/routes.ts

import type { RouteObject } from 'react-router'

// import { uiRoutes } from '@apps/ui'
import { dashboard01Routes } from '@apps/dashboard-01'

export const routesAccumulate = [
  // ...uiRoutes,
  ...dashboard01Routes,
] as const satisfies RouteObject[]
