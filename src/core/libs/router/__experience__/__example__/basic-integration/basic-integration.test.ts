// src/core/libs/router/__experience__/__example__/basic-integration/basic-integration.test.ts

import { describe, it, expect } from 'vitest'

import { routes as builtRoutes, hardcodedReferenceRoutes } from './basic-integration'

describe('src/core/libs/router/__experience__/__example__/basic-integration/basic-integration.test.ts', () => {
  it('builtRoutes должен соответствовать эталону hardcodedReferenceRoutes', () => {
    // Проверка что builtRoutes - объект, а не массив
    expect(Array.isArray(builtRoutes)).toBe(false)
    expect(typeof builtRoutes).toBe('object')

    // Проверка идентичности структуры
    expect(builtRoutes).toEqual(hardcodedReferenceRoutes)

    console.log('builtRoutes:', JSON.stringify(builtRoutes, null, 2))
    console.log('hardcodedReferenceRoutes:', JSON.stringify(hardcodedReferenceRoutes, null, 2))
  })
})
