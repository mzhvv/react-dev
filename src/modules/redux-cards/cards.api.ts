import { z } from 'zod'

const baseUrl = 'http://localhost:3001'
const cardsUrl = `${baseUrl}/v1/api/cards`

const CardDtoScheme = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
})
const CardsDtoScheme = CardDtoScheme.array()

export const cardsApi = {
  getCards: () => {
    return fetch(`${cardsUrl}`)
      .then(res => res.json())
      .then(res => {
        return CardsDtoScheme.parse(res)
      })
  },

  getCard: (cardId: string) => {
    return fetch(`${cardsUrl}/${cardId}`)
      .then(res => res.json())
      .then(res => {
        return CardDtoScheme.parse(res)
      })
  },

  deleteCard: (cardId: string) => {
    return fetch(`${cardsUrl}/${cardId}`, { method: 'DELETE' }).then(res => res.json())
  },
}
