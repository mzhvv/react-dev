// src/core/libs/router/builders/routes/versions/v0/builder-routes.ts

import type {
  RoutesConfig,
  RouteObjectConfig,
  RouteObject,
  NonIndexRouteObject,
} from '../../../../types/foundation'

export function builderRoutes<Config extends RoutesConfig, Output extends RouteObject>(
  config: Config
): Output {
  const transform = (node: RouteObjectConfig): RouteObject => {
    if ('index' in node && node.index === true) {
      return {
        index: true,
        // ✅ Добавляем element ТОЛЬКО если он есть в конфиге
        ...(node.element && { element: node.element }),
      }
    }

    // ✅ Создаем результат ТОЛЬКО с element, если он есть
    const result: NonIndexRouteObject = {
      ...(node.element && { element: node.element }),
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

  const [providerKey, providerConfig] = Object.entries(config)[0]

  const appRoutes =
    'children' in providerConfig && providerConfig.children
      ? Object.values(providerConfig.children).map(transform)
      : []

  // ✅ Для провайдера тоже добавляем element только если он есть
  return {
    path: 'path' in providerConfig ? providerConfig.path : providerKey,
    ...(providerConfig.element && { element: providerConfig.element }),
    children: appRoutes.length > 0 ? appRoutes : undefined,
  } as unknown as Output
}
