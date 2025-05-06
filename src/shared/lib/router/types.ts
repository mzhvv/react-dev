// src/shared/lib/router/types.ts

import type { IndexRouteObject, NonIndexRouteObject } from 'react-router'

import type {
  ConfigRoutes,
  ConfigRoutes_IndexEntry,
  ConfigRoutes_NonIndexEntry,
} from '@/shared/config/routes'

// prettier-ignore
type IndexEntry = 
& Omit<IndexRouteObject, keyof ConfigRoutes_IndexEntry | 'element'> 
& ConfigRoutes_IndexEntry 
& { 
  element: IndexRouteObject['element']
}

// prettier-ignore
type NoIndexEntry<E extends ConfigRoutes, K extends keyof E> = 
& Omit<NonIndexRouteObject,'path' | 'children' | 'element'> 
// & Omit<ConfigRoutes_NonIndexEntry, ''>
& {
  index?: false; 
  path: E[K]['path'];   
  children?: E[K]['children'] extends ConfigRoutes ? RouterRoutes<E[K]['children']> : undefined
  element: NonIndexRouteObject['element']
}

type RouterRoutesEntry<
  E extends ConfigRoutes,
  K extends keyof E,
> = E[K] extends ConfigRoutes_IndexEntry
  ? IndexEntry
  : E[K] extends ConfigRoutes_NonIndexEntry
    ? NoIndexEntry<E, K>
    : never

export type RouterRoutes<C extends ConfigRoutes = ConfigRoutes> = {
  [K in keyof C]: RouterRoutesEntry<C, K>
}

export type ExtractRouterRoutes<TAll extends ConfigRoutes, TKey extends keyof TAll> = RouterRoutes<
  Extract<Pick<TAll, TKey>, ConfigRoutes>
>
