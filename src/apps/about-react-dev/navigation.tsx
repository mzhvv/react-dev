import { InfoIcon } from 'lucide-react'

import type { NavigationObject } from '@navigation'

import type { Path } from './types'

export const navigationAboutReactDev = [
  { path: '/about-react-dev', title: 'About react-dev', icon: InfoIcon },
] as const satisfies NavigationObject<`/${Path}`>[]
