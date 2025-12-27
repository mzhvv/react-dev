// src/core/shared/libs/router/builders/build-routes.ts

import type { RouteObject, NonIndexRouteObject } from 'react-router'
import type { RouteConfigObject, RouteConfigNode } from '../types'

export const builderRoutes = {
  buildRoutes: <Config extends RouteConfigObject, Output extends RouteObject[]>(
    config: Config
  ): Output => {
    const providerConfig = config.provider

    const transform = (node: RouteConfigNode): RouteObject => {
      if ('index' in node && node.index === true) {
        return {
          index: true,
          element: node.element,
        }
      }

      const result: NonIndexRouteObject = {
        element: node.element,
      }

      if ('path' in node && node.path !== undefined) {
        result.path = node.path as string
      }

      if ('children' in node && node.children && Object.keys(node.children).length > 0) {
        const childrenArray = Object.values(node.children).map(transform)
        if (childrenArray.length > 0) {
          result.children = childrenArray
        }
      }

      return result
    }

    const providerChildren =
      'children' in providerConfig && providerConfig.children
        ? Object.values(providerConfig.children).map(transform)
        : []

    const providerRoute = {
      element: providerConfig.element,
      children: providerChildren.length > 0 ? providerChildren : undefined,
    } as NonIndexRouteObject

    // return [providerRoute] as unknown as Output
    return [providerRoute] as unknown as Output
  },
}
