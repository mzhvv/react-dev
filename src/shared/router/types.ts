// src/shared/router/types.ts

import type { RouteObject } from 'react-router'

export const REDUX_CARDS_PREFIX = 'redux-cards' as const
export type ReduxCardsPrefix = typeof REDUX_CARDS_PREFIX

export type ReduxCardsRoutesMap = 'no-req' | 'req-comp' | 'thunk' | 'thunk/:id'

export type ReduxCardPaths = Exclude<ReduxCardsRoutesMap, `${string}/:id`>

export type ReduxCardsRoutes = RouteObject & {
  path: ReduxCardsPrefix
  children: (RouteObject & { path: ReduxCardsRoutesMap })[]
}
