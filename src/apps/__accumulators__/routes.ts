// src/apps/__accumulators__/routes.ts

import type { AppsRoutes } from '@apps/accumulators/types'

import { templateAppExperienceRoutes } from '@template-app-experience'
import { templateAppRoutes } from '@template-app'

export const appsRoutes = [
  templateAppExperienceRoutes,
  templateAppRoutes,
] as const satisfies AppsRoutes
