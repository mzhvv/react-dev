// src/apps/@mzhvv/example/app/router/react-router/loose-typed/index.test.ts

import { describe, it, expect } from 'vitest'

import {
  mzhvvExampleRouteBuilt as builtRoute,
  mzhvvExampleReferenceRoute as referenceRoute,
} from './index.tsx'

describe('src/apps/@mzhvv/example/app/router/react-router/loose-typed/index.test.ts', () => {
  it('builtRoute должен соответствовать эталону referenceRoute', () => {
    // Проверка идентичности структуры
    expect(builtRoute).toEqual(referenceRoute)

    console.log('builtRoute:', JSON.stringify(builtRoute, null, 2))
    console.log('referenceRoute:', JSON.stringify(referenceRoute, null, 2))
  })
})
