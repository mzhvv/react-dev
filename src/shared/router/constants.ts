// src/shared/router/constants.ts

import type { RouteObject } from 'react-router'

// ...

export const PREFIX_GROUPS = {
  DRAFTS: 'drafts',
} as const

// REDUX CARDS

export const REDUX_CARDS_PREFIX = 'redux-cards' as const
type ReduxCardsPrefix = typeof REDUX_CARDS_PREFIX

export const REDUX_CARDS_PATHS = {
  NO_REQ: 'no-req',
  REQ_COMP: 'req-comp',
  THUNK: 'thunk',
  THUNK_ID: 'thunk/:id',
} as const
type ReduxCardsPathsKey = keyof typeof REDUX_CARDS_PATHS
type ReduxCardsPaths = (typeof REDUX_CARDS_PATHS)[ReduxCardsPathsKey]

export type ReduxCardsRoutes = RouteObject & {
  path: ReduxCardsPrefix
  children: (RouteObject & { path: ReduxCardsPaths })[]
}

const reduxCardsAbsolutePath = `${PREFIX_GROUPS.DRAFTS}/${REDUX_CARDS_PREFIX}`
export const REDUX_CARDS_PATHS_OBJECTS = {
  [REDUX_CARDS_PATHS.NO_REQ]: {
    label: 'no-req',
    absolutePath: `/${reduxCardsAbsolutePath}/${REDUX_CARDS_PATHS.NO_REQ}`,
  },
  [REDUX_CARDS_PATHS.REQ_COMP]: {
    label: 'req-comp',
    absolutePath: `/${reduxCardsAbsolutePath}/${REDUX_CARDS_PATHS.REQ_COMP}`,
  },
  [REDUX_CARDS_PATHS.THUNK]: {
    label: 'thunk',
    absolutePath: `/${reduxCardsAbsolutePath}/${REDUX_CARDS_PATHS.THUNK}`,
  },
} as const
export const REDUX_CARDS_PATHS_MAP = Object.entries(REDUX_CARDS_PATHS_OBJECTS)
