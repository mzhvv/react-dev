// src/shared/config/routes/utils/get-absolute-path-by-key.ts

import type {
  ConfigRoutes_KeyWithLayout,
  ConfigRoutes,
  ConfigRoutes_AbsolutePathByKey,
} from '@/shared/config/routes'
import { configRoutesAPI } from '@/shared/config/routes'

export function getAbsolutePathByKey<Key extends ConfigRoutes_KeyWithLayout>(
  key: Key
): ConfigRoutes_AbsolutePathByKey<Key> {
  const normalize = (base: string, path: string) => {
    const cleanPath = path.replace(/^\/+/, '')
    const combined = base ? `${base}/${cleanPath}` : `/${cleanPath}`
    return combined === '/' ? '/' : combined.replace(/\/+/g, '/')
  }

  type StackItem = { routes: ConfigRoutes; accPath: string }
  const stack: StackItem[] = [{ routes: configRoutesAPI.allRoutes, accPath: '' }]

  while (stack.length) {
    const { routes, accPath } = stack.pop()!

    for (const k in routes) {
      const route = routes[k]
      const currentAcc = 'path' in route && route.path ? normalize(accPath, route.path) : accPath

      if (k === key) {
        if (route.path) return currentAcc as ConfigRoutes_AbsolutePathByKey<Key>
        if (route.index) return (currentAcc || '/') as ConfigRoutes_AbsolutePathByKey<Key>
        return '' as ConfigRoutes_AbsolutePathByKey<Key>
      }

      if (route.children) {
        stack.push({ routes: route.children, accPath: currentAcc })
      }
    }
  }

  const fallback = '/*' as ConfigRoutes_AbsolutePathByKey<Key>
  return fallback
}
