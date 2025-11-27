// src/apps/__accumulators__/routes.ts

import type { AppsRoutes } from '@accumulators/types'

import { templateAppRoutes } from '@template-app'

export const appsRoutes = [...templateAppRoutes] as const satisfies AppsRoutes[]
