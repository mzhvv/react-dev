// src/apps/__accumulator__/route.ts

import type { AccumulatorRoute } from '@core/framework/acc-agg'

import { homeRoute } from '@apps/home'
import { examplesRoute } from '@apps/@mzhvv/examples'
import { tamplateAppRoute } from '@apps/@mzhvv/template-app'

/* ✅ Порядок хаотичный - сортировка не требуется! */

export const appsRoute = [
  homeRoute,
  examplesRoute,
  tamplateAppRoute,
] as const satisfies AccumulatorRoute
