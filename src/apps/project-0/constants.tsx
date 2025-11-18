// src/apps/project-0/constants.tsx

import type { NavigationParentPath } from '@global/navigation'
import type { GlobalNavigationConstants } from '@global/constants'

import type { ParentRoutePath } from './types/router-and-navigation'

export const project0NavigationConstants = {
  project0ParentLink: { '/project-0': { title: 'project-0' } } as const satisfies Record<
    NavigationParentPath<ParentRoutePath>,
    GlobalNavigationConstants
  >,
  project0ChildrensLink: {} as const,
} as const

// // i18n

// import { useTranslation } from 'react-i18next'

// export function useProject0NavigationConstants() {
//   const { t } = useTranslation('common')

//   const project0ParentLink = {
//     '/project-0': { title: t('') || 'project-0' },
//   } as const satisfies Record<NavigationParentPath<ParentRoutePath>, GlobalNavigationConstants>

//   const project0ChildrensLink = {} as const

//   return {
//     project0ParentLink,
//     project0ChildrensLink,
//   }
// }
