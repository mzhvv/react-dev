// src/shared/config/routes/types.test-d.ts

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
