// src/core/libs/router/__experience__/__example__/basic-integration/basic-integration.test.ts

import { describe, it, expect } from 'vitest'
import { routes as builtRoutes, hardcodedReferenceRoutes } from './basic-integration'
import { hardcodedRoutesAddElementUndefined, sortObjectKeys } from '@core/libs/router/util/test'

describe('src/core/libs/router/__experience__/__example__/basic-integration/basic-integration.test.ts', () => {
  it('builtRoutes должен соответствовать эталону hardcodedReferenceRoutesWithElementUndefined', () => {
    const hardcodedReferenceRoutesWithElementUndefined =
      hardcodedRoutesAddElementUndefined(hardcodedReferenceRoutes)

    // Проверка что builtRoutes - объект, а не массив
    expect(Array.isArray(builtRoutes)).toBe(false)
    expect(typeof builtRoutes).toBe('object')

    // Проверка идентичности структуры
    expect(builtRoutes).toEqual(hardcodedReferenceRoutesWithElementUndefined)

    //  Проверка JSON-сериализации (дополнительная гарантия)
    expect(JSON.stringify(sortObjectKeys(builtRoutes))).toBe(
      JSON.stringify(sortObjectKeys(hardcodedReferenceRoutesWithElementUndefined))
    )

    console.log('BUILT_ROUTES:', JSON.stringify(builtRoutes, null, 2))
    console.log(
      'HARDCODED_REFERENCE:',
      JSON.stringify(hardcodedReferenceRoutesWithElementUndefined, null, 2)
    )
  })
})
