// src/apps/__accumulator__/route.ts

import type { AccumulatorRoute } from '@core/configs/framework/dataConfig'

import { homeDataConfig } from '@apps/home'
import { uiDataConfig } from '@apps/ui'
import { documentationDataConfig } from '@apps/documentation'
import { examplesDataConfig } from '@apps/@mzhvv/examples'
import { templateAppDataConfig } from '@apps/@mzhvv/template-app'

export const appsRoute = [
  homeDataConfig.route,

  uiDataConfig.route,

  documentationDataConfig.route,
  examplesDataConfig.route,
  templateAppDataConfig.route,
] as const satisfies AccumulatorRoute
