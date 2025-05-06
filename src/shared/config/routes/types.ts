// src/shared/config/routes/types.ts

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
