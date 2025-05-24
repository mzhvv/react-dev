import { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { useAppSelector, useAppStore } from '@/app/store'
import { Button } from '@/shared/ui/button'

import type { CardId } from '../cards.slice'
import { cardsSlice } from '../cards.slice'
import { fetchCards } from '../model/fetch-cards'

export const CardsList = () => {
  // console.log('render ThunkCardsList (cards-thunk)')

  const appStore = useAppStore()

  const isPending = useAppSelector(cardsSlice.selectors.selectIsFetchCardsPending)

  useEffect(() => {
    fetchCards()
  }, [appStore])

  const [sortType, setSortType] = useState<'asc' | 'desc'>('asc')

  const sortedCards = useAppSelector(state =>
    cardsSlice.selectors.selectSortedCards(state, sortType)
  )

  return (
    <div className='mx-auto w-fit space-y-2'>
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
    </div>
  )
}

const CardListItem = memo(function CardListItem({ cardId }: { cardId: CardId }) {
  // console.log('render ThunkCardListItem (cards-thunk):', cardId)

  const navigate = useNavigate()

  const card = useAppSelector(state => state['cards-thunk'].entities[cardId])

  const handleCardClick = () => {
    navigate(cardId, { relative: 'path' })
  }

  if (!card) return <div>error</div>
  return (
    <li>
      <Button onClick={handleCardClick} variant='link2' size='default2'>
        {card.title}
      </Button>
    </li>
  )
})
