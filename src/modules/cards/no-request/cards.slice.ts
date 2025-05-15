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
}

const initialCardsState: CardsState = {
  entities: {},
  ids: [],
  selectedCardId: undefined,
}

export const cardsSlice = createSlice({
  name: 'cards-no-req',
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
  },

  reducers: {
    stored: (state, action: PayloadAction<{ cards: Card[] }>) => {
      const { cards } = action.payload

      state.entities = cards.reduce(
        (acc, card) => {
          acc[card.id] = card
          return acc
        },
        {} as Record<CardId, Card>
      )
      state.ids = cards.map(card => card.id)

      // return {
      //   ...state,
      //   entities: cards.reduce(
      //     (acc, card) => {
      //       acc[card.id] = card
      //       return acc
      //     },
      //     {} as Record<CardId, Card>
      //   ),
      //   ids: cards.map(card => card.id),
      // }
    },

    addSelected: (state, action: PayloadAction<{ cardId: CardId }>) => {
      state.selectedCardId = action.payload.cardId

      // return {
      //   ...state,
      //   selectedCardId: action.payload.cardId,
      // }
    },

    removeSelected: state => {
      state.selectedCardId = undefined

      // return {
      //   ...state,
      //   selectedCardId: undefined,
      // }
    },
  },
})

//  initialCards

export const initialCardsList: Card[] = Array.from({ length: 1000 }, (_, index) => ({
  id: `Card id ${index + 1}`,
  title: `Card ${index + 1}`,
  description: `Description for card ${index + 1}`,
}))
