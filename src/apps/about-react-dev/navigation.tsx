import type { NavigationLinkObject } from '@navigation'

import type { Path } from './types'

export const navigationAboutReactDev = [
  { path: '/about-react-dev', title: 'About react-dev' },
] as const satisfies NavigationLinkObject<Path>[]
