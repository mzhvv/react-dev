// src/main/__aggregators__/routes.ts

import type { RouteObject } from 'react-router'

import { appsRoutes } from '@accumulators/routes'

import { routes as reactDevRoutes } from '../app/routes'

const { children: reactDevChildren, ...ReactDevLayout } = reactDevRoutes

export const routes = {
  ...ReactDevLayout,
  children: [...reactDevChildren, ...appsRoutes],
} as const satisfies RouteObject
