// __experience__/react-router/tuple-route-object.tsx

import type {
  RouteObject as DefaultRouteObject,
  NonIndexRouteObject,
  IndexRouteObject,
} from 'react-router'

// #region Базовая структура RouteObject(react-router)

const baseRoute = [
  {
    path: 'a',
    children: [{ index: true }, { path: 'a-a' }],
  },
] as const satisfies DefaultRouteObject[]

/* 🧠 Проблема: Общий тип, нет типобезопасности */

// #endregion

// #region CustomBaseRoute

type CustomBaseRoute = Array<
  Omit<NonIndexRouteObject, 'path' | 'children'> & {
    path: 'a'
    children: Array<
      | IndexRouteObject
      | (Omit<NonIndexRouteObject, 'path'> & {
          path: 'a-a'
        })
    >
  }
>

const customBaseRoute = [
  {
    path: 'a',
    children: [{ index: true }, { path: 'a-a' }],
  },
] as const satisfies CustomBaseRoute

/* 🧠 Проблемы: 
  1. Не безопасно, TypeScript не может проверить children
  2. Нет автокомплита
  3. boilerplate 
*/

// #endregion

// #region customRoute

type CustomRouteObject<Path extends string, Children = never> = Omit<
  DefaultRouteObject,
  'path' | 'children'
> & {
  path: Path
  children?: Array<Children>
}

type CustomRoute = Array<CustomRouteObject<'a', IndexRouteObject | CustomRouteObject<'a-a'>>>

const customRoute = [
  {
    path: 'a',
    children: [{ index: true }, { path: 'a-a' }],
  },
] as const satisfies CustomRoute

/* 🧠 Проблемы: 
  1. По прежнему не безопасно, TypeScript не может проверить children
  2  Union `IndexRouteObject | ...` ломает автокомплит 
*/

// #endregion

// #region strictTupleRouteObject

/** ⚠️ Только tuple! nion Запрет! */
type strictTupleRouteObject<
  Path extends string | undefined,
  Children extends unknown[] | undefined = undefined,
> = Omit<NonIndexRouteObject, 'path' | 'children'> & {
  path: Path
} & (Children extends undefined ? { children?: undefined } : { children: Children })

// type StrictCustomRoute = [
//   strictTupleRouteObject<undefined, [strictTupleRouteObject<'a-a'>]>,

//   strictTupleRouteObject<'b', [IndexRouteObject, strictTupleRouteObject<'b-a'>]>,
//   strictTupleRouteObject<
//     'c',
//     [IndexRouteObject, strictTupleRouteObject<'c-a', [strictTupleRouteObject<'c-a-a'>]>]
//   >,
// ]

type UndefinedDomainRoute = strictTupleRouteObject<undefined, UndefinedSegmentRoute>
type UndefinedSegmentRoute = [strictTupleRouteObject<'a-a'>]

type BDomainRoute = strictTupleRouteObject<'b', [IndexRouteObject, ...BSegmentRoute]>
type BSegmentRoute = [strictTupleRouteObject<'b-a'>, strictTupleRouteObject<'b-b'>]

type CDomainRoute = strictTupleRouteObject<'c', [IndexRouteObject, ...CSegmentRoute]>
type CSegmentRoute = [strictTupleRouteObject<'c-a', CAtomicRoute>]
type CAtomicRoute = [strictTupleRouteObject<'c-a-a'>]

type DDomainRoute = strictTupleRouteObject<'d', [IndexRouteObject, ...DSegmentRoute]>
type DSegmentRoute = [
  strictTupleRouteObject<'d-a', [...DAtomicRoute]>,
  strictTupleRouteObject<'d-b'>,
]
type DAtomicRoute = [strictTupleRouteObject<'d-a-a'>, strictTupleRouteObject<'d-a-b'>]

type StrictCustomRoute = [UndefinedDomainRoute, BDomainRoute, CDomainRoute, DDomainRoute]

const strictCustomRoute = [
  {
    path: undefined,
    children: [{ path: 'a-a' }],
  },
  {
    path: 'b',
    children: [{ index: true }, { path: 'b-a' }, { path: 'b-b' }],
  },

  {
    path: 'c',
    children: [{ index: true }, { path: 'c-a', children: [{ path: 'c-a-a' }] }],
  },
  {
    path: 'd',
    children: [
      { index: true },
      { path: 'd-a', children: [{ path: 'd-a-a' }, { path: 'd-a-b' }] },
      { path: 'd-b' },
    ],
  },
] as const satisfies StrictCustomRoute

/* 🧠 Проблема: ✅ */

// #endregion
