// src/core/configs/framework/dataConfig/navigation/builders.test.ts

import { describe, it, expect } from 'vitest'

import type { NavigationSectionId } from './types'
import { navigationBuilders } from './builders'

describe('navigationBuilders - src/core/configs/framework/dataConfig/navigation/builders.test.ts', () => {
  describe('createSectionObject', () => {
    it('navigationBuilders.createSectionObjec([SectionId])', () => {
      const sections = ['projects', 'development'] as const satisfies NavigationSectionId[]

      sections.forEach(id => {
        const result = navigationBuilders.createSectionObject(id)
        expect(result.id).toBe(id)
        expect(result.constKey).toBe(id)
      })
    })
  })

  // Интеграция createLinkObject, адаптация не требуется
})
