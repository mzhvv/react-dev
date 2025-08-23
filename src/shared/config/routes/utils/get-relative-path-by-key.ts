// src/shared/config/routes/utils/get-relative-path-by-key.ts

import type {
  ConfigRoutes_KeyWithLayout,
  ConfigRoutes,
  ConfigRoutes_RelativePathByKey,
} from '@/shared/config/routes'
import { configRoutesAPI } from '@/shared/config/routes'

export function getRelativePathByKey<Key extends ConfigRoutes_KeyWithLayout>(
  key: Key
): ConfigRoutes_RelativePathByKey<Key> {
  type StackItem = { routes: ConfigRoutes; parentPath: string }
  const stack: StackItem[] = [{ routes: configRoutesAPI.allRoutes, parentPath: '' }]

  while (stack.length) {
    const { routes, parentPath } = stack.pop()!

    for (const k in routes) {
      const route = routes[k]
      const children = route.children
      const routePath = route.path
      const isIndex = route.index

      if (k === key) {
        if (typeof routePath === 'string') return routePath as ConfigRoutes_RelativePathByKey<Key>
        if (isIndex) return (parentPath || '/') as ConfigRoutes_RelativePathByKey<Key>
        return '' as ConfigRoutes_RelativePathByKey<Key>
      }

      if (children) {
        const newParentPath =
          typeof routePath === 'string' && routePath !== '/' && !routePath.startsWith('/')
            ? routePath
            : parentPath
        stack.push({ routes: children, parentPath: newParentPath })
      }
    }
  }

  const fallback = '*' as ConfigRoutes_RelativePathByKey<Key>
  return fallback
}
