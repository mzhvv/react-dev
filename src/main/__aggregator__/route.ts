// src/main/__aggregator__/route.ts

import type { RouteObject } from 'react-router'

import { mainRoute } from '@main/app/route'
import { appsRoute } from '@accumulator/route'

export const route = [
  {
    ...mainRoute,
    children: appsRoute,
  },
] as const satisfies RouteObject[]
