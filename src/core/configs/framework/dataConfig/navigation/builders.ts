// src/core/configs/framework/dataConfig/navigation/builders.ts

import { primitiveNavigationBuilders } from '@mzhvv/libs/routers/react-router/navigation'

import type { SectionId } from './types'

// #region - Адаптация createSectionObject

// export function createSectionObject<Id extends SectionId, ConstKey extends string = Id>(
//   id: Id,
//   constKey?: ConstKey
// ) {
//   return primitiveNavigationBuilders.createSectionObject<Id, ConstKey>(id, constKey)
// }

// constKey не нужен - используется id по умолчанию достаточно
export function createSectionObject<Id extends SectionId>(id: Id) {
  return primitiveNavigationBuilders.createSectionObject<Id>(id)
}

// #endregion

// #region - Интеграция createLinkObject, адаптация не требуется
// #endregion

// API
/** coreNavigationBuilders */
export const navigationBuilders = {
  createSectionObject: createSectionObject,
  createLinkObject: primitiveNavigationBuilders.createLinkObject,
}
