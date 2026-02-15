// src/core/libs/router/__experience__/__example__/base/base.test.ts

import { describe, it, expect } from 'vitest'
import { hardcodedReferenceRoutesWithElementUndefined, routes as builtRoutes } from './base'

describe('src/core/libs/router/__experience__/base/example.test.ts', () => {
  it('Сравнение подготовленного `hardcodedRoutes` с постоенным `routes` при помощи `routesBuilder`', () => {
    // Полная проверка структуры
    expect(builtRoutes).toEqual(hardcodedReferenceRoutesWithElementUndefined)

    // Проверка что это объект, а не массив
    expect(Array.isArray(builtRoutes)).toBe(false)
    expect(typeof builtRoutes).toBe('object')

    // Проверка JSON сериализации
    expect(JSON.stringify(builtRoutes)).toBe(
      JSON.stringify(hardcodedReferenceRoutesWithElementUndefined)
    )

    // Для дебага - посмотрим что реально приходит
    console.log('ROUTES:', JSON.stringify(builtRoutes, null, 2))
    console.log('HARDCODED:', JSON.stringify(hardcodedReferenceRoutesWithElementUndefined, null, 2))

    expect(builtRoutes).toEqual(hardcodedReferenceRoutesWithElementUndefined)
  })
})
