// src/widgets/shared/application-map.tsx

import type { DefaultRouterLink, MakeSafeRouterLinkTo } from '@/shared/types'
import { RouterLink } from '@/shared/ui'

// model/types

type SafeRouterLinkTo = MakeSafeRouterLinkTo<'application-map'>
type SafeRouterLink = DefaultRouterLink<SafeRouterLinkTo>

// model/config

const routerLink: SafeRouterLink = { to: '/application-map', label: 'application map' } as const

// model/ui

export const ApplicationMap: React.FC = () => {
  return (
    <RouterLink // <SafeRouterLink>
      link={routerLink}
    />
  )
}
