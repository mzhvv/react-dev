// src/core/framework/acc-agg/types/route.ts

import type { RouteObject } from 'react-router'

export type MainRoute = Omit<RouteObject, 'children'>
export type AppsRouteObject<T extends RouteObject = RouteObject> = T
export type AccumulatorRoute<T extends AppsRouteObject[] = AppsRouteObject[]> = T
export type AggregatorRoute = Array<MainRoute & { children: AccumulatorRoute }>

/* ⚠️ 
  !TODO: flow должен быть: @mzhvv/* -> core/* -> apps/* и main/*
  
  a @mzhvv/libs/routers/react-router/route` являеться зависимость для `@mzhvv/framework/acc-agg/types/route`
*/
