// src/main/__aggregator__/route.ts

import type { AggregatorRoute } from '@core/framework/acc-agg'
import { accumulatorRoute } from '@accumulator/route'
import { mainRoute } from '@main/app/route'

export const route = [
  {
    ...mainRoute,
    children: accumulatorRoute,
  },
] as const satisfies AggregatorRoute
