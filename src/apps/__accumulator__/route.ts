// src/apps/__accumulator__/route.ts

import type { AccumulatorRoute } from '@core/configs/framework/dataConfig'

import { templateAppDataConfig } from '@packages/framework/template-app'
import { examplesDataConfig } from '@apps/examples'
import { uiDataConfig } from '@apps/ui'

import { homeDataConfig } from '@home'
import { documentationDataConfig } from '@documentation'
import { settingsMicrofrontendConfig } from '@apps/settings'

export const appsRoute = [
  templateAppDataConfig.route,
  uiDataConfig.route,
  homeDataConfig.route,
  documentationDataConfig.route,
  examplesDataConfig.route,

  settingsMicrofrontendConfig.route,
] as const satisfies AccumulatorRoute
