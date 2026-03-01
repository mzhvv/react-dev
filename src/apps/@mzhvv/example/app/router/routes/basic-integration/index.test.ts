// src/apps/@mzhvv/example/app/router/routes/basic-integration/index.test.ts

import { describe, it, expect } from 'vitest'

import { routes as builtRoutes, hardcodedReferenceRoutes } from '.'

describe('src/apps/@mzhvv/example/app/router/routes/basic-integration/index.test.ts', () => {
  it('builtRoutes должен соответствовать эталону hardcodedReferenceRoutes', () => {
    // Проверка идентичности структуры
    expect(builtRoutes).toEqual(hardcodedReferenceRoutes)

    console.log('builtRoutes:', JSON.stringify(builtRoutes, null, 2))
    console.log('hardcodedReferenceRoutes:', JSON.stringify(hardcodedReferenceRoutes, null, 2))
  })
})
