// src/app/store.ts

import { configureStore, createSelector } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'

import { countersReducer } from '@/modules/counters/counters.reducer'
import {
  cardsSliceNoRequest,
  cardsSliceRequestInComponent,
  cardsSliceRequestInFunction,
} from '@/modules/cards'

import { initialCardsList } from '@/modules/cards/no-request/cards.slice'

const _store = configureStore({
  reducer: {
    counters: countersReducer,

    [cardsSliceNoRequest.name]: cardsSliceNoRequest.reducer,
    [cardsSliceRequestInComponent.name]: cardsSliceRequestInComponent.reducer,
    [cardsSliceRequestInFunction.name]: cardsSliceRequestInFunction.reducer,
  },
})

_store.dispatch(cardsSliceNoRequest.actions.stored({ cards: initialCardsList }))

export const store = _store

export type AppState = ReturnType<typeof _store.getState>
export type AppDispatch = typeof _store.dispatch

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppStore = useStore.withTypes<typeof _store>()

export const createAppSelector = createSelector.withTypes<AppState>()
