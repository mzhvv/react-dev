import type { NavigationLink } from '@navigation'

import type { Path } from './types'

export const navigationAboutReactDev = [
  { path: '/about-react-dev', title: 'About react-dev' },
] as const satisfies NavigationLink<Path>[]
