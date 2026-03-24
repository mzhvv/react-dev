// src/packages/@mzhvv/libs/routers/react-router/navigation/builders/primitive/index.test.ts

import { describe, it, expect } from 'vitest'
import { primitiveNavigationBuilders } from './index'

describe('primitiveNavigationBuilders - src/packages/@mzhvv/libs/routers/react-router/navigation/builders/primitive/index.test.ts', () => {
  describe('createSectionObject', () => {
    it(`primitiveNavigationBuilders.createSectionObject('id')`, () => {
      const result = primitiveNavigationBuilders.createSectionObject('id')

      expect(result).toEqual({ id: 'id', constKey: 'id' })
    })

    it(` primitiveNavigationBuilders.createSectionObject('id', 'constKey')`, () => {
      const result = primitiveNavigationBuilders.createSectionObject('id', 'constKey')

      expect(result).toEqual({ id: 'id', constKey: 'constKey' })
    })
  })

  describe('createLinkObject', () => {
    it(`primitiveNavigationBuilders.createLinkObject('path')`, () => {
      const result = primitiveNavigationBuilders.createLinkObject('path')

      expect(result).toEqual({
        relativePath: 'path',
        absolutePath: '/path',
        constKey: 'path',
      })
    })

    it(`primitiveNavigationBuilders.createLinkObject('path', 'constKey')`, () => {
      const result = primitiveNavigationBuilders.createLinkObject('path', 'constKey')

      expect(result).toEqual({
        relativePath: 'path',
        absolutePath: '/path',
        constKey: 'constKey',
      })
    })
  })
})
