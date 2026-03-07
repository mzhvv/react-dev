// src/main/__aggregator__/route.ts

import type { AggregatorRoute } from '@mzhvv/framework/acc-agg'

import { mainRoute } from '@main/app/route'
import { accumulatorRoute } from '@accumulator/route'

export const route = [
  {
    ...mainRoute,
    children: accumulatorRoute,
  },
] as const satisfies AggregatorRoute
