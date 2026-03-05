// src/apps/@mzhvv/examples/__examples__/routers/react-router/loose-typed/flow.test.ts

import { describe, it, expect } from 'vitest'

import { builtRoute, referenceRoute } from './flow.tsx'

describe('src/apps/@mzhvv/examples/__examples__/routers/react-router/loose-typed/flow.test.ts', () => {
  it('builtRoute должен соответствовать эталону referenceRoute', () => {
    // Проверка идентичности структуры
    expect(builtRoute).toEqual(referenceRoute)

    console.log('builtRoute:', JSON.stringify(builtRoute, null, 2))
    console.log('referenceRoute:', JSON.stringify(referenceRoute, null, 2))
  })
})
