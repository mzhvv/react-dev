// src/shared/lib/router/utils/conversion-for-router.ts

import type { RouteObject } from 'react-router'
import type { ConfigRoutes } from '@/shared/config/routes'
import type { RouterRoutes } from '../types'

export function conversionToRouteObject<C extends ConfigRoutes>(
  config: RouterRoutes<C>
): RouteObject[] {
  const result: RouteObject[] = []

  for (const key of Object.keys(config) as Array<keyof C>) {
    const object = config[key]

    if ('index' in object && object.index === true) {
      result.push(object)
    } else {
      const { children, ...rest } = object
      result.push({
        ...rest,
        index: undefined,
        children: children ? conversionToRouteObject(children) : undefined,
      })
    }
  }

  return result
}
