import { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Button } from '@/shared/ui/button'
import { useAppDispatch, useAppSelector, useAppStore } from '@/app/store'

import type { CardId } from './cards.slice'
import { cardsSlice } from './cards.slice'
import { cardsApi } from '@/modules/cards/cards.api'

export const CardsList = () => {
  // console.log('render CardsList[cards-req-func]')

  const isPending = useAppSelector(cardsSlice.selectors.selectIsFetchCardsPending)

  const dispatch = useDispatch()
  const appStore = useAppStore()

  useEffect(() => {
    const isIdle = cardsSlice.selectors.selectIsFetchCardsIdle(appStore.getState())
    if (!isIdle) return

    dispatch(cardsSlice.actions.fetchCardsPending())
    cardsApi
      .getCards()
      .then(cards => {
        dispatch(cardsSlice.actions.fetchCardsSuccess({ cards }))
      })
      .catch(() => {
        dispatch(cardsSlice.actions.fetchCardsRejected())
      })
  }, [appStore, dispatch])

  const [sortType, setSortType] = useState<'asc' | 'desc'>('asc')

  const sortedCards = useAppSelector(state =>
    cardsSlice.selectors.selectSortedCards(state, sortType)
  )
  const selectedCardId = useAppSelector(cardsSlice.selectors.selectSelectedCaedId)

  return (
    <div className='mx-auto w-fit space-y-2'>
      {!selectedCardId ? (
        <>
          <div className='flex items-center gap-1'>
            <Button onClick={() => setSortType('asc')}>asc</Button>
            <Button onClick={() => setSortType('desc')}>desc</Button>
          </div>
          {!isPending ? (
            <ul className='*:py-1 *:text-center'>
              {sortedCards.map(card => (
                <CardListItem key={card.id} cardId={card.id} />
              ))}
            </ul>
          ) : (
            <div>loader...</div>
          )}
        </>
      ) : (
        <SelectedCard cardId={selectedCardId} />
      )}
    </div>
  )
}

const CardListItem = memo(function CardListItem({ cardId }: { cardId: CardId }) {
  // console.log('render CardListItem [cards-req-func]:', cardId)

  const card = useAppSelector(state => state['cards-req-func'].entities[cardId])
  const dispatch = useAppDispatch()

  const handleCardClick = () => {
    dispatch(cardsSlice.actions.addSelected({ cardId }))
  }

  if (!card) return null

  return (
    <li>
      <Button onClick={handleCardClick} variant='link2' size='default2'>
        {card.title}
      </Button>
    </li>
  )
})

const SelectedCard = ({ cardId }: { cardId: CardId }) => {
  const card = useAppSelector(state => state['cards-req-func'].entities[cardId])
  const dispatch = useAppDispatch()

  const handleBackButtonCLick = () => {
    dispatch(cardsSlice.actions.removeSelected())
  }

  if (!card) return null

  return (
    <div className='space-y-2 text-center'>
      <Button onClick={handleBackButtonCLick}>back</Button>
      <div>
        <h2>{card.title}</h2>
        <p>{card.id}</p>
        <p>{card.description}</p>
      </div>
    </div>
  )
}
