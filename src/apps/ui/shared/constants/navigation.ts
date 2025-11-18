// src/apps/ui/shared/constants/navigation.ts

import type { NavigationChildrenPath, NavigationParentPath } from '@global/navigation'
import type { GlobalNavigationConstants } from '@global/constants'

import type { ParentRoutePath, ChildrenRoutePaths } from '../types/router-and-navigation'

export const uiNavigationConstants = {
  uiParentLink: { '/ui': { title: 'ui' } } as const satisfies Record<
    NavigationParentPath<ParentRoutePath>,
    GlobalNavigationConstants
  >,
  uiChildrensLink: { '/ui/radio-group': { title: 'radio-group' } } as const satisfies Record<
    NavigationChildrenPath<ParentRoutePath, ChildrenRoutePaths>,
    GlobalNavigationConstants
  >,
} as const

// // i18n

// import { useTranslation } from 'react-i18next'

// export function useUiNavigationConstants() {
//   const { t } = useTranslation('common')

//   const uiParentLink = {
//     '/ui': { title: t('') || 'ui' },
//   } as const satisfies Record<NavigationParentPath<ParentRoutePath>, GlobalNavigationConstants>

//   const uiChildrensLink = {
//     '/ui/radio-group': { title: t('') || 'radio-group' },
//   } as const satisfies Record<
//     NavigationChildrenPath<ParentRoutePath, ChildrenRoutePaths>,
//     GlobalNavigationConstants
//   >

//   return {
//     uiParentLink,
//     uiChildrensLink,
//   }
// }
