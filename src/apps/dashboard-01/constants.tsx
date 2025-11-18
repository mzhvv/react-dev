// src/apps/dashboard-01/constants.tsx

import type { NavigationParentPath } from '@global/navigation'
import type { GlobalNavigationConstants } from '@global/constants'

import type { ParentRoutePath } from './types/router-and-navigation'

export const dashboard01NavigationConstants = {
  dashboard01ParentLink: { '/dashboard-01': { title: 'dashboard-01' } } as const satisfies Record<
    NavigationParentPath<ParentRoutePath>,
    GlobalNavigationConstants
  >,
  dashboard01ChildrensLink: {} as const,
} as const

// // i18n

// import { useTranslation } from 'react-i18next'

// export function useDashboard01NavigationConstants() {
//   const { t } = useTranslation('common')

//   const dashboard01ParentLink = {
//     '/dashboard-01': { title: t('') || 'dashboard-01' },
//   } as const satisfies Record<NavigationParentPath<ParentRoutePath>, GlobalNavigationConstants>

//   const dashboard01ChildrensLink = {} as const

//   return {
//     dashboard01ParentLink,
//     dashboard01ChildrensLink,
//   }
// }
