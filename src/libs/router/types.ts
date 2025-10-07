import type { RouteObject as RouteObjectDefault } from 'react-router'

export type RouteObject<T extends string = string> = Omit<RouteObjectDefault, 'path'> & {
  path: T | undefined // RouteObjectDefault['path']
}
