// src/shared/config/routes/utils/get-relative-path-by-key.test.ts

import { describe, it, expect } from 'vitest'

import type { ConfigRoutes_KeyWithLayout, ConfigRoutes_RelativePath } from '@/shared/config/routes'
import { getRelativePathByKey } from '@/shared/config/routes'

// const testDevLayout = getRelativePathByKey('devLayout')
// const testDev = getRelativePathByKey('dev')
// const testUi = getRelativePathByKey('ui')
// const testAuthorizationLayout = getRelativePathByKey('authorizationLayout')
// const testLogin = getRelativePathByKey('login')
// const testHomeLayout = getRelativePathByKey('homeLayout')
// const testHome = getRelativePathByKey('home')
// const testNotFound = getRelativePathByKey('notFound')

describe('getRelativePathByKey — Выборочно-ручная проверка', () => {
  const checks: [ConfigRoutes_KeyWithLayout, ConfigRoutes_RelativePath][] = [
    ['devLayout', 'dev'],
    ['dev', 'dev'],
    ['ui', 'ui'],
    ['authorizationLayout', '/'],
    ['login', 'login'],
    ['homeLayout', '/'],
    ['home', '/'],
    ['notFound', '*'],
  ]

  // it.each(checks)('Ключ %s возвращает путь %s', (key, expected) => {
  //   expect(getRelativePathByKey(key)).toBe(expected)
  // })

  it('Возвращает ожидаемые относительные пути для выбранных ключей', () => {
    for (const [key, expected] of checks) {
      expect(getRelativePathByKey(key)).toBe(expected)
    }
  })

  it('Возвращает fallback "*" для неизвестного ключа', () => {
    // @ts-expect-error проверяем runtime fallback для некорректного ключа
    expect(getRelativePathByKey('unknownKey')).toBe('*')
  })
})
