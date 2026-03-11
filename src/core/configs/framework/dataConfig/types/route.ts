// src/core/configs/framework/dataConfig/types/route.ts

/* 📚 Конфигурация `dataConfig` 
  Зависимости:
    - `./src/packages/@mzhvv/framework`
    - `react-router` и(→) `./src/packages/@mzhvv/libs/routers/react-router`
*/

import type { RouteObject } from 'react-router'

export type MainRoute = Omit<RouteObject, 'children'>
export type AppsRouteObject<T extends RouteObject = RouteObject> = T
/** `appsRoute` */
export type AccumulatorRoute<T extends AppsRouteObject[] = AppsRouteObject[]> = T
/** `globalRoute`*/
export type AggregatorRoute = Array<MainRoute & { children: AccumulatorRoute }>
