// src/core/framework/acc-agg/types/route.ts

/* 📚 Конфигурация `acc-agg` 
  Зависимости:
    - src/packages/@mzhvv/framework
    - 'react-router' и(→) src/packages/@mzhvv/libs/routers/react-router
*/

import type { RouteObject } from 'react-router'

export type MainRoute = Omit<RouteObject, 'children'>
export type AppsRouteObject<T extends RouteObject = RouteObject> = T
export type AccumulatorRoute<T extends AppsRouteObject[] = AppsRouteObject[]> = T
export type AggregatorRoute = Array<MainRoute & { children: AccumulatorRoute }>
