import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

import { useAppDispatch, useAppSelector } from '@/app/store'
import { Button } from '@/shared/ui/button'

import type { CardId } from '../cards.slice'
import { cardsSlice } from '../cards.slice'
import { fetchCard } from '../model/fetch-card'
import { deleteCard } from '../model/delete-card'

export const CardItem = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { id } = useParams<{ id: CardId }>()
  const cardId = id ?? '' // todo

  const isPending = useAppSelector(cardsSlice.selectors.selectIsFetchCardPending)
  const card = useAppSelector(state => cardsSlice.selectors.selectCardById(state, cardId))

  const handleBackButtonCLick = () => {
    navigate('..', { relative: 'path' })
  }

  const handleDeleteCard = () => {
    dispatch(deleteCard(cardId))
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
      <Button onClick={handleDeleteCard}>delete</Button>
    </div>
  )
}
