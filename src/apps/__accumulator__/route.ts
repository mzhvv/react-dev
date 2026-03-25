// src/apps/__accumulator__/route.ts

import type { AccumulatorRoute } from '@core/configs/framework/dataConfig'

import { homeRoute } from '@apps/home'
import { documentationRoute } from '@apps/documentation'
import { examplesRoute } from '@apps/@mzhvv/examples'
import { tamplateAppRoute } from '@apps/@mzhvv/template-app'
import { uiRoute } from '@apps/ui'

/* ✅ Порядок хаотичный - сортировка не требуется! */

export const appsRoute = [
  homeRoute,

  documentationRoute,
  examplesRoute,
  tamplateAppRoute,

  uiRoute,
] as const satisfies AccumulatorRoute
