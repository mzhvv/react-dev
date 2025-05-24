// src/app/store.ts

import {
  configureStore,
  createSelector,
  type ThunkAction,
  type UnknownAction,
} from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'

import { countersReducer } from '@/modules/redux-counters/counters.reducer'
import {
  cardsSliceNoRequest,
  cardsSliceRequestInComponent,
  cardsSliceThunk,
} from '@/modules/redux-cards'

import { initialCardsList } from '@/modules/redux-cards/no-req/cards.slice'
import { fetchCards } from '@/modules/redux-cards/thunk/model/fetch-cards'

import { extraArgument } from './extra-argument'

const _store = configureStore({
  reducer: {
    counters: countersReducer,

    [cardsSliceNoRequest.name]: cardsSliceNoRequest.reducer,
    [cardsSliceRequestInComponent.name]: cardsSliceRequestInComponent.reducer,
    [cardsSliceThunk.name]: cardsSliceThunk.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: { extraArgument: extraArgument } }),
})

_store.dispatch(cardsSliceNoRequest.actions.stored({ cards: initialCardsList }))
_store.dispatch(fetchCards())

export const store = _store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<R = void> = ThunkAction<R, AppState, typeof extraArgument, UnknownAction>

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppStore = useStore.withTypes<typeof store>()

export const createAppSelector = createSelector.withTypes<AppState>()
