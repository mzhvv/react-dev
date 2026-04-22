// src/apps/__accumulator__/route.ts

import type { AccumulatorRoute } from '@core/configs/framework/dataConfig'

import { templateAppDataConfig } from '@packages/@mzhvv/framework/template-app'
import { examplesDataConfig } from '@examples'
import { uiDataConfig } from '@ui'

import { homeDataConfig } from '@home'
import { documentationDataConfig } from '@documentation'

export const appsRoute = [
  templateAppDataConfig.route,
  uiDataConfig.route,
  homeDataConfig.route,
  documentationDataConfig.route,
  examplesDataConfig.route,
] as const satisfies AccumulatorRoute
