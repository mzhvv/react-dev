// src/apps/__accumulators__/routes.ts

import type { RoutesAccumulate } from '@accumulators/types'
import { templateAppRoutes } from '@template-app'

export const routesAccumulate = [...templateAppRoutes] as const satisfies RoutesAccumulate[]
