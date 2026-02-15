// src/core/libs/router/__experience__/__example__/basic-integration/basic-integration.test.ts

import { describe, it, expect } from 'vitest'
import {
  routes as builtRoutes,
  hardcodedReferenceRoutesWithElementUndefined,
} from './basic-integration'

describe('src/core/libs/router/__experience__/__example__/basic-integration/basic-integration.test.ts', () => {
  it('builtRoutes должен соответствовать эталону hardcodedReferenceRoutesWithElementUndefined', () => {
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

// !TODO: any; переместить
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sortObjectKeys = (obj: any): any => {
  if (Array.isArray(obj)) return obj.map(sortObjectKeys)
  if (obj && typeof obj === 'object') {
    return Object.keys(obj)
      .sort()
      .reduce((acc, key) => ({ ...acc, [key]: sortObjectKeys(obj[key]) }), {})
  }
  return obj
}
