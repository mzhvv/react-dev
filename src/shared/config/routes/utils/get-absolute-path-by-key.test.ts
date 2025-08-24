// src/shared/config/routes/utils/get-absolute-path-by-key.test.ts

import { describe, it, expect } from 'vitest'

import type { ConfigRoutes_AbsolutePath, ConfigRoutes_KeyWithLayout } from '@/shared/config/routes'
import { getAbsolutePathByKey } from '@/shared/config/routes'

// const testDevLayout = getAbsolutePathByKey('devLayout')
// const testDev = getAbsolutePathByKey('dev')
// const testUi = getAbsolutePathByKey('ui')
// const testAuthorizationLayout = getAbsolutePathByKey('authorizationLayout')
// const testLogin = getAbsolutePathByKey('login')
// const testHomeLayout = getAbsolutePathByKey('homeLayout')
// const testHome = getAbsolutePathByKey('home')
// const testNotFound = getAbsolutePathByKey('notFound')

describe('getAbsolutePathByKey — Выборочно-ручная проверка', () => {
  const checks: [ConfigRoutes_KeyWithLayout, ConfigRoutes_AbsolutePath][] = [
    ['devLayout', '/dev'],
    ['dev', '/dev'],
    ['ui', '/dev/ui'],
    ['authorizationLayout', '/'],
    ['login', '/login'],
    ['homeLayout', '/'],
    ['home', '/'],
    ['notFound', '/*'],
  ]

  // it.each(checks)('Ключ %s возвращает путь %s', (key, expected) => {
  //   expect(getAbsolutePathByKey(key)).toBe(expected)
  // })

  it('Возвращает ожидаемые абсолютные пути для выбранных ключей', () => {
    for (const [key, expected] of checks) {
      expect(getAbsolutePathByKey(key)).toBe(expected)
    }
  })

  it('Возвращает fallback "/*" для неизвестного ключа', () => {
    // @ts-expect-error проверяем runtime fallback для некорректного ключа
    expect(getAbsolutePathByKey('unknownKey')).toBe('/*')
  })
})
