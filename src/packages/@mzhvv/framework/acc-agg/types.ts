// src/packages/@mzhvv/framework/acc-agg/types.ts

import type { RouteObject } from 'react-router'

export type MainRoute = Omit<RouteObject, 'children'>
export type AppsRouteObject<T extends RouteObject = RouteObject> = T
export type AccumulatorRoute<T extends AppsRouteObject[] = AppsRouteObject[]> = T
export type AggregatorRoute = Array<MainRoute & { children: AccumulatorRoute }>
