// src/apps/__accumulators__/routes.ts

import type { AppRoutes } from '@accumulators/types'

import { templateAppRoutes } from '@template-app'

export const routesAccumulate = [...templateAppRoutes] as const satisfies AppRoutes[]
