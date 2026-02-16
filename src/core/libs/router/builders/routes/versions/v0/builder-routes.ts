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
    // Обработка index route
    if ('index' in node && node.index === true) {
      return {
        index: true,
        ...(node.element && { element: node.element }),
      }
    }

    // Обработка обычного маршрута
    const result: NonIndexRouteObject = {
      ...(node.element && { element: node.element }),
    }

    //  Добавляем path, если есть
    if ('path' in node && node.path !== undefined) {
      result.path = node.path as string
    }

    //  Рекурсивно обрабатываем дочерние маршруты
    if ('children' in node && node.children && Object.keys(node.children).length > 0) {
      const childrenArray = Object.values(node.children).map(transform)
      if (childrenArray.length > 0) {
        result.children = childrenArray
      }
    }

    return result
  }

  // Извлекаем корневой (provider) маршрут
  const [providerKey, providerConfig] = Object.entries(config)[0]

  // Преобразуем все дочерние приложения
  const appRoutes =
    'children' in providerConfig && providerConfig.children
      ? Object.values(providerConfig.children).map(transform)
      : []

  // Возвращаем готовый маршрут для react-router
  return {
    path: 'path' in providerConfig ? providerConfig.path : providerKey,
    ...(providerConfig.element && { element: providerConfig.element }),
    children: appRoutes.length > 0 ? appRoutes : undefined,
  } as unknown as Output
}
