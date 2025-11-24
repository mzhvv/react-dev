// src/apps/ui/shared/types/rnc.ts // router navigation constants

// Routes

import type { CamelCase } from '@react-dev/shared/types'

export type DomainRoutePath = 'ui'
export type DomainRouteKey = CamelCase<DomainRoutePath>

export type SegmentRoutePath = 'components' | 'blocks'
export type SegmentRouteKey = CamelCase<SegmentRoutePath>

export type ComponentsRoutePath = 'radio-group'
export type ComponentsRouteKey = CamelCase<ComponentsRoutePath>

export type UiDomainPath = `/${DomainRoutePath}`
export type UiSegmenPath = `/${DomainRoutePath}/${SegmentRoutePath}`
export type UiComponentsPath =
  `/${DomainRoutePath}/${Extract<SegmentRoutePath, 'components'>}/${ComponentsRoutePath}`

// Router

import type { StrictRouteObject } from '@react-dev/__aggregator__/router'

export type UiDomainRoutes = Record<DomainRouteKey, StrictRouteObject<DomainRoutePath>>
export type UiSegmentRoutes = Record<SegmentRouteKey, StrictRouteObject<SegmentRoutePath>>
export type UiComponentsRoutes = Record<ComponentsRouteKey, StrictRouteObject<ComponentsRoutePath>>

// Navigation

export type UiDomainNavigation = UiDomainPath
export type UiSegmentNavigation = UiSegmenPath
export type UiComponentsNavigation = UiComponentsPath

// Constants

import type { GlobalNavigationConstants } from '@react-dev/__aggregator__/constants'

export type UiDomainNavigationLinks = Record<
  UiDomainNavigation,
  GlobalNavigationConstants<DomainRoutePath, UiDomainNavigation>
>
export type UiSegmentNavigationLinks = Record<
  UiSegmentNavigation,
  GlobalNavigationConstants<SegmentRoutePath, UiSegmentNavigation>
>
export type UiComponentsNavigationLinks = Record<
  UiComponentsNavigation,
  GlobalNavigationConstants<ComponentsRoutePath, UiComponentsNavigation>
>
