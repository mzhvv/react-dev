import type { NavigationLink } from '@navigation'
import { HomeIcon } from 'lucide-react'

export const navigationReactDev = [
  { path: '/', title: 'Home', icon: HomeIcon },
] as const satisfies NavigationLink[]
