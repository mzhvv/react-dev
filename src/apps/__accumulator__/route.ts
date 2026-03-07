// src/apps/__accumulator__/route.ts

import type { AccumulatorRoute } from '@mzhvv/framework/acc-agg'

import { homeRoute } from '@apps/home'
import { examplesRoute } from '@apps/@mzhvv/examples'

export const accumulatorRoute = [homeRoute, examplesRoute] as const satisfies AccumulatorRoute
