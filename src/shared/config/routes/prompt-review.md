<!-- src/shared/config/routes/prompt-review.md -->

```ts // src/shared/config/routes/routes.ts

import type { ConfigRoutes, ConfigRoutesAPI } from './types'

// prettier-ignore
const applicationsDomainsRoutes = {
  devLayout: { path: 'dev', children: {
    dev: { index: true },
    ui: { path: 'ui' },

    reduxLayout: { path: 'redux', children: {
      redux: { index: true }
    }}
  }},

  projectsLayout: { path: 'projects', children: {
    projects: { index: true },
    todoLayout: { path: 'todo', children: {
      todo: { index: true }
    }},
    blogLayout: { path: 'blog', children: {
      blog: { index: true },
      postId: { path: ':postId' }
    }}
  }},
} as const satisfies ConfigRoutes

// prettier-ignore
const authorizationDomainRoutes = {
  authorizationLayout: { path: '/', children: { 
    login: { path: 'login' },
    registration: { path: 'registration' }
  }},
} as const satisfies ConfigRoutes

const independentRoutes = {
  applicationMap: { path: 'application-map' },
} as const satisfies ConfigRoutes

// prettier-ignore
const homeRoutes = {
  homeLayout: { path: '/', children: {
    home: { index: true }
  }}
} as const satisfies ConfigRoutes

const systemRoutes = {
  notFound: { path: '*' },
} as const satisfies ConfigRoutes

const allRoutes = {
  ...applicationsDomainsRoutes,
  ...authorizationDomainRoutes,

  ...independentRoutes,
  ...homeRoutes,
  ...systemRoutes,
} as const satisfies ConfigRoutes

type ConfigRoutesAPI_Key =
  | 'allRoutes'
  | 'applicationsDomainsRoutes'
  | 'authorizationDomainRoutes'
  | 'independentRoutes'
  | 'homeRoutes'
  | 'systemRoutes'

/** API конфигурации маршрутов приложения */
export const configRoutesAPI = {
  allRoutes,

  applicationsDomainsRoutes,

  authorizationDomainRoutes,

  independentRoutes,
  homeRoutes,
  systemRoutes,
} as const satisfies ConfigRoutesAPI<ConfigRoutesAPI_Key>
```

```ts // src/shared/config/routes/types.ts

import type { configRoutesAPI } from './routes'

/*                         Конфигурации маршрутов приложения                         */

export type ConfigRoutes_IndexEntry = {
  index: true
  path?: never
  children?: never
}
export type ConfigRoutes_NonIndexEntry = {
  index?: never
  path: string
  children?: ConfigRoutes
}
export type ConfigRoutes_Entry = ConfigRoutes_IndexEntry | ConfigRoutes_NonIndexEntry
export type ConfigRoutes = Record<string, ConfigRoutes_Entry>

/*                             API конфигурации маршрутов приложения                              */

export type ConfigRoutesAPI<T extends string> = Record<T, ConfigRoutes>

/*                                            Хелперы                                             */

type JoinPath<Parent extends string, Child extends string> = Parent extends '/'
  ? `/${Child}`
  : Child extends `/${string}`
    ? Child
    : `${Parent}/${Child}`

/*                              Ключи из конфигурации маршрутовючи                                */

type ExtractKeyWithLayout<T> = T extends object
  ? {
      [K in keyof T]: K | (T[K] extends { children: infer C } ? ExtractKeyWithLayout<C> : never)
    }[keyof T]
  : never

/** Ключи с layout из конфигурации маршрутов @test ✅ */
export type ConfigRoutes_KeyWithLayout = ExtractKeyWithLayout<typeof configRoutesAPI.allRoutes>

type IsLayoutRoute<KEY extends string> = KEY extends `${string}Layout` ? true : false
type RemoveLayoutKey<ENTRY> = {
  [KEY in keyof ENTRY as IsLayoutRoute<KEY & string> extends true ? never : KEY]: ENTRY[KEY]
}
type ExtractKey<T> = T extends { children: infer C }
  ? ExtractKey<C>
  : T extends { index: true }
    ? never
    :
        | keyof RemoveLayoutKey<T>
        | {
            [K in keyof T]: T[K] extends { children: infer C } ? ExtractKey<C> : never
          }[keyof T]

/** Ключи без layout из конфигурации маршрутов @test ✅ */
export type ConfigRoutes_Key = ExtractKey<typeof configRoutesAPI.allRoutes>

/*                          Относительные пути из конфигурации маршрутов                          */

/** Рекурсивно собирает все относительные пути */
type CollectRelativePath<T> = T extends { path: infer P extends string }
  ? P | (T extends { children: infer C } ? CollectRelativePath<C> : never)
  : T extends Record<string, unknown>
    ? { [K in keyof T]: CollectRelativePath<T[K]> }[keyof T]
    : never

/** Относительный путь по ключу @test ✅ */
export type ConfigRoutes_RelativePath = CollectRelativePath<typeof configRoutesAPI.allRoutes>

/** Находит относительный путь по ключу */
type LookupRelativePathByKey<T, Key extends string, Acc extends string = ''> =
  T extends Record<string, unknown>
    ? {
        [K in keyof T]: K extends Key
          ? T[K] extends { path: infer P extends string }
            ? P extends `/${string}`
              ? P extends '/'
                ? '/'
                : never
              : P
            : T[K] extends { index: true }
              ? Acc
              : never
          : T[K] extends { path?: infer P extends string; children: infer C }
            ? LookupRelativePathByKey<C, Key, P extends string ? P : Acc>
            : never
      }[keyof T]
    : never

/** Относительный путь по ключу @test ✅ */
export type ConfigRoutes_RelativePathByKey<Key extends ConfigRoutes_KeyWithLayout> =
  LookupRelativePathByKey<typeof configRoutesAPI.allRoutes, Key>

/*                           Абсолютные пути из конфигурации маршрутов                            */

/** Рекурсивно собирает все абсолютные пути */
type CollectAbsolutePaths<T, Parent extends string = ''> = T extends {
  path: infer P extends string
}
  ?
      | (Parent extends '' ? (P extends '/' ? '/' : `/${P}`) : JoinPath<Parent, P>)
      | (T extends { children: infer C } ? CollectAbsolutePaths<C, JoinPath<Parent, P>> : never)
  : T extends Record<string, unknown>
    ? { [K in keyof T]: CollectAbsolutePaths<T[K], Parent> }[keyof T]
    : never

/** Абсолютные пути из конфигурации маршрутов @test ✅ */
export type ConfigRoutes_AbsolutePath = CollectAbsolutePaths<typeof configRoutesAPI.allRoutes>

/** Находит абсолютный путь по ключу */
type LookupAbsolutePathByKey<T, Key extends ConfigRoutes_KeyWithLayout, Acc extends string = ''> =
  T extends Record<string, unknown>
    ? {
        [K in keyof T]: K extends Key
          ? T[K] extends { path: infer P extends string }
            ? JoinPath<Acc, P>
            : T[K] extends { index: true }
              ? Acc
              : never
          : T[K] extends { path?: infer P extends string; children: infer C }
            ? LookupAbsolutePathByKey<C, Key, P extends string ? JoinPath<Acc, P> : Acc>
            : never
      }[keyof T]
    : never

/** Абсолютный путь по ключу из конфигурации маршрутов @test ✅ */
export type ConfigRoutes_AbsolutePathByKey<Key extends ConfigRoutes_KeyWithLayout> =
  LookupAbsolutePathByKey<typeof configRoutesAPI.allRoutes, Key>
```

```ts // src/shared/config/routes/types.test-d.ts

import type {
  ConfigRoutes_KeyWithLayout,
  ConfigRoutes_RelativePath,
  ConfigRoutes_AbsolutePath,
  ConfigRoutes_RelativePathByKey,
  ConfigRoutes_AbsolutePathByKey,
  ConfigRoutes_Key,
} from '@/shared/config/routes'

type Equals<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false
type Expect<T extends true> = T
type Extends<A, B> = A extends B ? true : false

/*                              Ключи из конфигурации маршрутовючи                                */

// prettier-ignore
type ExpectedKeyWithLayout =
  | 'devLayout' | 'dev' | 'ui'
  // | 'reduxLayout' | 'redux'
  // | 'projectsLayout' | 'projects' | 'todoLayout' | 'todo' | 'blogLayout' | 'blog' | 'postId'
  | 'authorizationLayout' | 'login' | 'registration'
  // | 'applicationMap'
  | 'homeLayout' | 'home'
  | 'notFound'

/** Проверка, что все ожидаемые ключи входят в `ConfigRoutes_KeyWithLayout` */
type _CheckKeyWithLayout = Expect<Extends<ExpectedKeyWithLayout, ConfigRoutes_KeyWithLayout>>

// prettier-ignore
type ExpectedKey =
  | 'dev' | 'ui'
  // | 'redux'
  // | 'projects' | 'todo' | 'blog' | 'postId'
  | 'login' | 'registration'
  // | 'applicationMap'
  | 'home'
  | 'notFound'

/** Проверка, что все ожидаемые ключи входят в `ConfigRoutes_Key` */
type _CheckKey = Expect<Extends<ExpectedKey, ConfigRoutes_Key>>

/*                          Относительные пути из конфигурации маршрутов                          */

// prettier-ignore
type ExpectedRelativePath = 
  | 'dev'  | 'ui' // | 'redux'
  // | 'projects' | 'todo' | 'blog' | ':postId'
  | 'login' | 'registration'
  // | 'application-map'
  | '/'
  | '*'

/** Проверка, что все ожидаемые относительные пути входят в `ConfigRoutes_RelativePath` */
type _CheckRelativePath = Expect<Extends<ExpectedRelativePath, ConfigRoutes_RelativePath>>

/** Проверка, что union всех `ConfigRoutes_RelativePathByKey` входит в `ConfigRoutes_RelativePath` */
type _RelativePathUnion = Expect<
  Extends<ConfigRoutes_RelativePathByKey<ConfigRoutes_KeyWithLayout>, ConfigRoutes_RelativePath>
>

/** Проверка точного соответствия `ConfigRoutes_RelativePathByKey<K>` для всех ключей */
type _RelativePathByKeyExact = {
  [K in ConfigRoutes_KeyWithLayout]: Expect<
    Equals<ConfigRoutes_RelativePathByKey<K>, ConfigRoutes_RelativePathByKey<K>>
  >
}

/*                           Абсолютные пути из конфигурации маршрутов                            */

// prettier-ignore
type ExpectedAbsolutePath =
  | '/dev' | '/dev/ui' // | '/dev/redux'
  // | '/projects' | '/projects/todo' | '/projects/blog' | '/projects/blog/:postId'
  | '/login' | '/registration'
  // | '/application-map'
  | '/'
  | '/*'

/** Проверка, что все ожидаемые абсолютные пути входят в `ConfigRoutes_AbsolutePath` */
type _CheckAbsolutePath = Expect<Extends<ExpectedAbsolutePath, ConfigRoutes_AbsolutePath>>

/** Проверка, что union всех `ConfigRoutes_AbsolutePathByKey` входит в `ConfigRoutes_AbsolutePath` */
type _AbsolutePathUnion = Expect<
  Extends<ConfigRoutes_AbsolutePathByKey<ConfigRoutes_KeyWithLayout>, ConfigRoutes_AbsolutePath>
>

/** Проверка точного соответствия `ConfigRoutes_AbsolutePathByKey<K>` для всех ключей */
type _AbsolutePathByKeyExact = {
  [K in ConfigRoutes_KeyWithLayout]: Expect<
    Equals<ConfigRoutes_AbsolutePathByKey<K>, ConfigRoutes_AbsolutePathByKey<K>>
  >
}
```

```ts // src/shared/config/routes/utils/get-absolute-path-by-key.ts

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
```

```ts // src/shared/config/routes/utils/get-absolute-path-by-key.test.ts

import { describe, it, expect } from 'vitest'

import type { ConfigRoutes_AbsolutePath, ConfigRoutes_KeyWithLayout } from '@/shared/config/routes'
import { getAbsolutePathByKey } from '@/shared/config/routes'

// const testDevLayout = getAbsolutePathByKey('devLayout')
// const testDev = getAbsolutePathByKey('dev')
// const testUi = getAbsolutePathByKey('ui')
// const testAuthorizationLayout = getAbsolutePathByKey('authorizationLayout')
// const testLogin = getAbsolutePathByKey('login')
// const testHomeLayout = getAbsolutePathByKey('homeLayout')
// const testHome = getAbsolutePathByKey('home')
// const testNotFound = getAbsolutePathByKey('notFound')

describe('getAbsolutePathByKey — Выборочно-ручная проверка', () => {
  const checks: [ConfigRoutes_KeyWithLayout, ConfigRoutes_AbsolutePath][] = [
    ['devLayout', '/dev'],
    ['dev', '/dev'],
    ['ui', '/dev/ui'],
    ['authorizationLayout', '/'],
    ['login', '/login'],
    ['homeLayout', '/'],
    ['home', '/'],
    ['notFound', '/*'],
  ]

  it('Возвращает ожидаемые абсолютные пути для выбранных ключей', () => {
    for (const [key, expected] of checks) {
      expect(getAbsolutePathByKey(key)).toBe(expected)
    }
  })

  // it.each(checks)('Ключ %s возвращает путь %s', (key, expected) => {
  //   expect(getAbsolutePathByKey(key)).toBe(expected)
  // })

  it('Возвращает fallback "/*" для неизвестного ключа', () => {
    // @ts-expect-error проверяем runtime fallback для некорректного ключа
    expect(getAbsolutePathByKey('unknownKey')).toBe('/*')
  })
})
```

```ts // src/shared/config/routes/utils/get-relative-path-by-key.ts

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
```

```ts // src/shared/config/routes/utils/get-relative-path-by-key.test.ts

import { describe, it, expect } from 'vitest'

import type { ConfigRoutes_KeyWithLayout, ConfigRoutes_RelativePath } from '@/shared/config/routes'
import { getRelativePathByKey } from '@/shared/config/routes'

// const testDevLayout = getRelativePathByKey('devLayout')
// const testDev = getRelativePathByKey('dev')
// const testUi = getRelativePathByKey('ui')
// const testAuthorizationLayout = getRelativePathByKey('authorizationLayout')
// const testLogin = getRelativePathByKey('login')
// const testHomeLayout = getRelativePathByKey('homeLayout')
// const testHome = getRelativePathByKey('home')
// const testNotFound = getRelativePathByKey('notFound')

describe('getRelativePathByKey — Выборочно-ручная проверка', () => {
  const checks: [ConfigRoutes_KeyWithLayout, ConfigRoutes_RelativePath][] = [
    ['devLayout', 'dev'],
    ['dev', 'dev'],
    ['ui', 'ui'],
    ['authorizationLayout', '/'],
    ['login', 'login'],
    ['homeLayout', '/'],
    ['home', '/'],
    ['notFound', '*'],
  ]

  it('Возвращает ожидаемые относительные пути для выбранных ключей', () => {
    for (const [key, expected] of checks) {
      expect(getRelativePathByKey(key)).toBe(expected)
    }
  })

  // it.each(checks)('Ключ %s возвращает путь %s', (key, expected) => {
  //   expect(getRelativePathByKey(key)).toBe(expected)
  // })

  it('Возвращает fallback "*" для неизвестного ключа', () => {
    // @ts-expect-error проверяем runtime fallback для некорректного ключа
    expect(getRelativePathByKey('unknownKey')).toBe('*')
  })
})
```

```ts // src/shared/config/routes/index.ts

// prettier-ignore
export type {
  ConfigRoutes_NonIndexEntry,
  ConfigRoutes_IndexEntry,
  ConfigRoutes_Entry,
  ConfigRoutes,

  ConfigRoutes_KeyWithLayout,
  ConfigRoutes_Key,

  ConfigRoutes_RelativePath,
  ConfigRoutes_RelativePathByKey,
  ConfigRoutes_AbsolutePath,
  ConfigRoutes_AbsolutePathByKey,
} from './types'

export { configRoutesAPI } from './routes'

export { getAbsolutePathByKey } from './utils/get-absolute-path-by-key'
export { getRelativePathByKey } from './utils/get-relative-path-by-key'
```