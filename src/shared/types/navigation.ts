// src/shared/types/navigation.ts

import type { LinkProps } from 'react-router'

export type MainHashMavigation =
  // 'root'
  'application-content' | 'about-application' | 'about-me'

export type MakeSafeRouterLinkTo<T extends string> = T extends `/${string}` ? T : `/${T}`
export type MakeSafeHashLinkHref<T extends string> = T extends `#${string}` ? T : `#${T}`

type DefaultBaseLink = { label: string }

export type DefaultRouterLink<STRICT_TO = undefined> = Omit<LinkProps, 'to'> & {
  to: STRICT_TO extends undefined ? LinkProps['to'] : STRICT_TO
} & DefaultBaseLink

export type DefaultExternalLink = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: `https://${NonNullable<React.AnchorHTMLAttributes<HTMLAnchorElement>['href']>}`
} & DefaultBaseLink

export type DefaultHashLink<STRICT_HREF = undefined> = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> & {
  href: STRICT_HREF extends undefined
    ? `#${NonNullable<React.AnchorHTMLAttributes<HTMLAnchorElement>['href']>}`
    : STRICT_HREF
} & DefaultBaseLink
