import type { AppThunk } from '@/app/store'

import { cardsSlice, type CardId } from '../cards.slice'
import { fetchCards } from './fetch-cards'

export const deleteCard =
  (cardId: CardId): AppThunk =>
  async (dispatch, _, { cardsApi }) => {
    dispatch(cardsSlice.actions.deleteCardPending())
    try {
      await cardsApi.deleteCard(cardId)
      dispatch(cardsSlice.actions.deleteCardSuccess({ cardId }))
      dispatch(fetchCards({ refetch: true }))
    } catch (e) {
      dispatch(cardsSlice.actions.deleteCardRejected())
    }
  }
