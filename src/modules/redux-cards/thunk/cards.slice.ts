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
  fetchCardsStatus: 'idle' | 'pending' | 'success' | 'rejected'
  fetchCardStatus: 'idle' | 'pending' | 'success' | 'rejected'
  deleteCardStatus: 'idle' | 'pending' | 'success' | 'rejected'
}

const initialCardsState: CardsState = {
  entities: {},
  ids: [],
  fetchCardsStatus: 'idle',
  fetchCardStatus: 'idle',
  deleteCardStatus: 'idle',
}

export const cardsSlice = createSlice({
  name: 'cards-thunk',
  initialState: initialCardsState,

  selectors: {
    selectCardById: (state, cardId: CardId) => state.entities[cardId],
    selectSortedCards: createSelector(
      (state: CardsState) => state.ids,
      (state: CardsState) => state.entities,
      (_: CardsState, sort: 'asc' | 'desc') => sort,

      (ids, entities, sort) =>
        ids
          .map(id => entities[id])
          .filter((card: Card | undefined): card is Card => !!card) // card !== undefined
          .sort((a, b) => {
            if (sort === 'asc') {
              return a.title.localeCompare(b.title)
            } else {
              return b.title.localeCompare(a.title)
            }
          })
    ),

    selectIsFetchCardsIdle: state => state.fetchCardsStatus === 'idle',
    selectIsFetchCardsPending: state => state.fetchCardsStatus === 'pending',
    selectIsFetchCardPending: state => state.fetchCardStatus === 'pending',
    selectIsDeleteCardPending: state => state.deleteCardStatus === 'pending',
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

    //

    fetchCardPending: state => {
      state.fetchCardsStatus = 'pending'
    },
    fetchCardSuccess: (state, action: PayloadAction<{ card: Card }>) => {
      state.fetchCardStatus = 'success'

      const { card } = action.payload
      state.entities[card.id] = card
    },
    fetchCardRejected: state => {
      state.fetchCardsStatus = 'rejected'
    },

    //

    deleteCardPending: state => {
      state.fetchCardsStatus = 'pending'
    },
    deleteCardSuccess: (state, action: PayloadAction<{ cardId: CardId }>) => {
      state.fetchCardStatus = 'success'

      delete state.entities[action.payload.cardId]
      state.ids = state.ids.filter(cardId => cardId !== action.payload.cardId)
    },
    deleteCardRejected: state => {
      state.fetchCardsStatus = 'rejected'
    },
  },
})
