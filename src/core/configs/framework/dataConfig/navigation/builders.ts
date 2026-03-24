// src/core/configs/framework/dataConfig/navigation/builders.ts

import { primitiveNavigationBuilders } from '@mzhvv/libs/routers/react-router/navigation'

import type { SectionId } from './types'

// #region SectionObject

export function createSectionObject<Id extends SectionId, ConstKey extends Id = Id>(id: Id) {
  return primitiveNavigationBuilders.createSectionObject<Id, ConstKey>(id)
}

// #endregion

// #region LinkObject
// Адаптация не требуется
// #endregion

// API
/** coreNavigationBuilders */
export const navigationBuilders = {
  createSectionObject: createSectionObject,
  createLinkObject: primitiveNavigationBuilders.createLinkObject,
}
