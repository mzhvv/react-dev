// src/react-dev/shared/libs/navigation/index.tsx

import type { NavigationParentPath, NavigationSectionKey } from '@global/libs/navigation/types'

import type { ChildrenRoutePaths } from '@react-dev/shared/types/router-and-navigation'

// по сути является аккумулятором как и src/apps/accumulators/navigation-accumulate.ts
export const navigationReactDev = {
  application: ['/', '/about'],
  author: ['/collaboration'],
  projects: [],
  development: ['/ui-component-variants'],
} as const satisfies Record<
  NavigationSectionKey,
  Array<'/' | NavigationParentPath<ChildrenRoutePaths>>
>

// export const navigationReactDev = {
//   application: [
//     {
//       path: '/',
//       title: 'Главная',
//       icon: HeartIcon, // HouseHeartIcon
//     },
//     {
//       path: '/about',
//       title: 'О приложении',
//       icon: HandHeartIcon, // HandHelpingIcon
//     },
//   ],
//   author: [
//     {
//       path: '/collaboration',
//       title: 'Сотрудничество',
//       icon: HeartHandshakeIcon, // HandshakeIcon
//     },
//   ],
//   projects: [],
//   development: [{ path: '/ui-component-variants', title: 'ui-component-variants' }],
// } as const satisfies Record<NavigationSectionKey, NavigationLink<ChildrenRoutePaths | ''>[]>
