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
  cardsReduxThunkSlice,
} from '@/modules/redux-cards'

import { initialCardsList } from '@/modules/redux-cards/no-req/cards.slice'
import { cardsApi } from '@/modules/redux-cards/cards.api'
import { fetchCards } from '@/modules/redux-cards/thunk/model/fetch-cards'

const _extraArgument = {
  cardsApi,
}

const _store = configureStore({
  reducer: {
    counters: countersReducer,

    [cardsSliceNoRequest.name]: cardsSliceNoRequest.reducer,
    [cardsSliceRequestInComponent.name]: cardsSliceRequestInComponent.reducer,
    [cardsReduxThunkSlice.name]: cardsReduxThunkSlice.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: { extraArgument: _extraArgument } }),
})

_store.dispatch(cardsSliceNoRequest.actions.stored({ cards: initialCardsList }))
_store.dispatch(fetchCards())

export const store = _store

export type AppState = ReturnType<typeof _store.getState>
export type AppDispatch = typeof _store.dispatch
export type AppThunk<R = void> = ThunkAction<R, AppState, typeof _extraArgument, UnknownAction>

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppStore = useStore.withTypes<typeof _store>()

export const createAppSelector = createSelector.withTypes<AppState>()
