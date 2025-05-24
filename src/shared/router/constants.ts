// src/shared/router/constants.ts

import type { RouteObject } from 'react-router'
import {
  // router,
  reduxCardsRoutes,
} from './router'

const REDUX_CARDS_PREFIX = 'redux-cards' as const
type ReduxCardsPrefix = typeof REDUX_CARDS_PREFIX

const absolutePath = `/drafts/${REDUX_CARDS_PREFIX}`

export const REDUX_CARDS_ROUTES_MAP = {
  'no-req': { label: 'no-req', absolutePath: `${absolutePath}/no-req`, relativePath: null },
  'req-comp': { label: 'req-comp', absolutePath: `${absolutePath}/req-comp`, relativePath: null },
  thunk: { label: 'thunk', absolutePath: `${absolutePath}/thunk`, relativePath: null },

  'thunk/:id': { absolutePath: `${absolutePath}/thunk/:id`, relativePath: null },
} as const
type ReduxCardsRoutesMap = keyof typeof REDUX_CARDS_ROUTES_MAP

export type ReduxCardsRoutes = RouteObject & {
  path: ReduxCardsPrefix
  children: (RouteObject & { path: ReduxCardsRoutesMap })[]
}

type ReduxCardPaths = {
  [K in keyof typeof REDUX_CARDS_ROUTES_MAP]: K extends `${string}/:id` ? never : K
}[keyof typeof REDUX_CARDS_ROUTES_MAP]
export const REDUX_CARDS_PATHS = reduxCardsRoutes.children
  .map(route => route.path)
  .filter((path): path is ReduxCardPaths => !path.includes('/:id')) satisfies ReduxCardPaths[]

// export const reduxCardPaths2 = (router.routes[0].children
//   ?.find(route => route.path === 'drafts')
//   ?.children?.find(route => route.path === 'redux-cards')
//   ?.children?.map(route => route.path)
//   ?.filter((path): path is ReduxCardPaths => !path?.includes('/:id')) ??
//   []) satisfies ReduxCardPaths[]
