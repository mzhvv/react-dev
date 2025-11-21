// src/apps/__accumulators__/routes.ts

import type { RouteObject } from 'react-router'

import { dashboard01Routes } from '@apps/dashboard-01'
import { uiRoutes } from '@apps/ui'
import { project01Routes } from '@apps/project-01'

export const routesAccumulate = [
  ...dashboard01Routes,
  ...uiRoutes,
  ...project01Routes,
] as const satisfies RouteObject[]
