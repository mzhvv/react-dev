// src/apps/__accumulators__/routes.ts

// import { uiRoutes } from '@apps/ui'
import { dashboard01Routes } from '@apps/dashboard-01'

export const routesAccumulate = [
  // ...uiRoutes,
  ...dashboard01Routes,
] as const
