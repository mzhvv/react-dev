import type { PayloadAction } from '@reduxjs/toolkit'
import { createSelector, createSlice } from '@reduxjs/toolkit'

export type CardId = string
type Card = {
  id: CardId
  title: string
  description: string
}

type CardsState = {
  entities: Record<CardId, Card | undefined>
  ids: CardId[]
  selectedCardId: CardId | undefined
  fetchCardsStatus: 'idle' | 'pending' | 'success' | 'rejected'
}

const initialCardsState: CardsState = {
  entities: {},
  ids: [],
  selectedCardId: undefined,
  fetchCardsStatus: 'idle',
}

export const cardsSlice = createSlice({
  name: 'cards-req-func',
  initialState: initialCardsState,

  selectors: {
    selectSelectedCaedId: state => state.selectedCardId,

    selectSortedCards: createSelector(
      (state: CardsState) => state.ids,
      (state: CardsState) => state.entities,
      (_: CardsState, sort: 'asc' | 'desc') => sort,

      (ids, entities, sort) =>
        ids
          .map(id => entities[id])
          .filter((card: Card | undefined): card is Card => card !== undefined)
          .sort((a, b) => {
            if (sort === 'asc') {
              return a.title.localeCompare(b.title)
            } else {
              return b.title.localeCompare(a.title)
            }
          })
    ),

    selectIsFetchCardsPending: state => state.fetchCardsStatus === 'pending',
    selectIsFetchCardsIdle: state => state.fetchCardsStatus === 'idle',
  },

  reducers: {
    fetchCardsPending: state => {
      state.fetchCardsStatus = 'pending'
    },

    fetchCardsSuccess: (state, action: PayloadAction<{ cards: Card[] }>) => {
      const { cards } = action.payload

      state.fetchCardsStatus = 'success'
      state.entities = cards.reduce(
        (acc, card) => {
          acc[card.id] = card
          return acc
        },
        {} as Record<CardId, Card>
      )
      state.ids = cards.map(card => card.id)
    },

    fetchCardsRejected: state => {
      state.fetchCardsStatus = 'rejected'
    },

    addSelected: (state, action: PayloadAction<{ cardId: CardId }>) => {
      state.selectedCardId = action.payload.cardId
    },

    removeSelected: state => {
      state.selectedCardId = undefined
    },
  },
})
