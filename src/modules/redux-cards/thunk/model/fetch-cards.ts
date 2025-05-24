import type { AppThunk } from '@/app/store'

import { cardsSlice } from '../cards.slice'

export const fetchCards =
  ({ refetch }: { refetch?: boolean } = {}): AppThunk =>
  (dispatch, getState, { cardsApi }) => {
    const isIdle = cardsSlice.selectors.selectIsFetchCardsIdle(getState())
    if (!isIdle && !refetch) return

    dispatch(cardsSlice.actions.fetchCardsPending())
    cardsApi
      .getCards()
      .then(cards => {
        dispatch(cardsSlice.actions.fetchCardsSuccess({ cards }))
      })
      .catch(() => {
        dispatch(cardsSlice.actions.fetchCardsRejected())
      })
  }
