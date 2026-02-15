// src/core/libs/router/util/test/hardcoded-routes-add-element-undefined.ts

import type { RouteObject } from '../../types/foundation'

export function hardcodedRoutesAddElementUndefined<T extends RouteObject>(route: T): T {
  const addElement = (obj: Record<string, unknown>): Record<string, unknown> => {
    if (!obj || typeof obj !== 'object') return obj

    const result: Record<string, unknown> = {
      ...obj,
      ...(!('element' in obj) && { element: undefined }),
    }

    if (Array.isArray(result.children)) {
      result.children = result.children.map(child => addElement(child as Record<string, unknown>))
    }

    return result
  }

  return addElement(route as Record<string, unknown>) as T
}
