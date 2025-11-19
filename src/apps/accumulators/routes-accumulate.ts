// src/apps/accumulators/routes-accumulate.ts

import type { RouteObject } from 'react-router'

import { dashboard01Routes } from '@apps/dashboard-01'
import { project0Routes } from '@apps/project-0'
import { uiRoutes } from '@apps/ui'

export const routesAccumulate = [
  ...dashboard01Routes,
  ...project0Routes,
  ...uiRoutes,
] as const satisfies RouteObject[]
