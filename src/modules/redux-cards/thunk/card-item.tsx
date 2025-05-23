import { useAppDispatch, useAppSelector } from '@/app/store'
import { Button } from '@/shared/ui/button'

import type { CardId } from './cards.slice'
import { cardsSlice } from './cards.slice'
import { useNavigate, useParams } from 'react-router'
import { useEffect } from 'react'
import { fetchCard } from './model/fetch-card'

export const CardItemReduxThunk = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { id: cardId = '' } = useParams<{ id: CardId }>() // TODO - убрать = ''
  const isPending = useAppSelector(cardsSlice.selectors.selectIsFetchCardPending)
  const card = useAppSelector(state => cardsSlice.selectors.selectCardById(state, cardId))

  const handleBackButtonCLick = () => {
    navigate('..', { relative: 'path' })
  }

  useEffect(() => {
    dispatch(fetchCard(cardId))
  }, [cardId, dispatch])

  if (isPending) return <div>loading...</div>
  if (!card) return <div>error</div>

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
