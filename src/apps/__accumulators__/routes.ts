// src/apps/__accumulators__/routes.ts

import type { RouteObject } from 'react-router'

import { dashboard01Routes } from '@apps/dashboard-01'
import { uiRoutes } from '@apps/ui'
import { project0Routes } from '@apps/project-0'

export const routesAccumulate = [
  ...dashboard01Routes,
  ...uiRoutes,
  ...project0Routes,
] as const satisfies RouteObject[]
