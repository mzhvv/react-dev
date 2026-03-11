// src/main/__aggregator__/route.ts

import type { AggregatorRoute } from '@core/configs/framework/dataConfig'

import { appsRoute } from '@accumulator/route'

import { mainRoute } from '../app/route'

export const globalRoute = [
  {
    ...mainRoute,
    children: appsRoute,
  },
] as const satisfies AggregatorRoute

/* Избыточно (на данный момент)

  ```ts
  import type { MainRoute, AccumulatorRoute } from '@core/framework/acc-agg'

  function createAggregatorRoute(mainRoute: MainRoute, accumulatorRoute: AccumulatorRoute) {
    type AggregatorRouteObject = AggregatorRoute[0]
    const routeObject = {
      ...mainRoute,
      children: accumulatorRoute,
    } as const satisfies AggregatorRouteObject
    const aggregatorRoute = [routeObject] satisfies AggregatorRoute
    return aggregatorRoute
  }

  export const route = createAggregatorRoute(mainRoute, accumulatorRoute)
  ```

  ✅ Но, как условная проверка:
    - все типы из `core/framework/acc-agg`
    - архитектура едина
    - контракты соблюдены
*/
