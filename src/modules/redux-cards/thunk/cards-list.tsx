import { memo, useEffect, useState } from 'react'

import { Button } from '@/shared/ui/button'
import { useAppSelector, useAppStore } from '@/app/store'

import type { CardId } from './cards.slice'
import { cardsSlice } from './cards.slice'
import { fetchCards } from './model/fetch-cards'
import { useNavigate } from 'react-router'

export const CardsListReduxThunk = () => {
  // console.log('render CardsList[cards-req-func]')

  const isPending = useAppSelector(cardsSlice.selectors.selectIsFetchCardsPending)

  const appStore = useAppStore()

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
  // console.log('render CardListItem [cards-req-func]:', cardId)

  const navigate = useNavigate()

  const card = useAppSelector(state => state['cards-thunk'].entities[cardId])

  if (!card) return <div>error</div>

  const handleCardClick = () => {
    navigate(cardId, { relative: 'path' })
  }

  return (
    <li>
      <Button onClick={handleCardClick} variant='link2' size='default2'>
        {card.title}
      </Button>
    </li>
  )
})
