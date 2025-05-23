import type { AppThunk } from '@/app/store'

import { cardsSlice, type CardId } from '../cards.slice'

export const fetchCard =
  (cardId: CardId): AppThunk =>
  (dispatch, getState, { cardsApi }) => {
    const isPending = cardsSlice.selectors.selectIsFetchCardPending(getState())
    if (!isPending) return

    dispatch(cardsSlice.actions.fetchCardPending())
    cardsApi
      .getCard(cardId)
      .then(card => {
        dispatch(cardsSlice.actions.fetchCardSuccess({ card }))
      })
      .catch(() => {
        dispatch(cardsSlice.actions.fetchCardRejected())
      })
  }
