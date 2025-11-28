// src/apps/ui/shared/types/prnc.ts
/** @description prnc = Paths-Routes-Navigations-Constants */

import type { StrictPathRouteObject } from '@libs/router'
import type { GlobalNavigationConstants } from '@libs/constants'
import type { CamelCase } from '@utils/string'

// #region Paths

type DomainRelativePath = 'ui'
type DomainAbsolutePath = `/${DomainRelativePath}`

type SegmentRelativePath = 'components' | 'blocks'
type SegmentAbsolutePath = `/${DomainRelativePath}/${SegmentRelativePath}`

type ComponentsRelativePath = 'radio-group'
type ComponentsAbsolutePath =
  `/${DomainRelativePath}/${Extract<SegmentRelativePath, 'components'>}/${ComponentsRelativePath}`

// #endregion

// #region Routes

type DomainRoutesKey = CamelCase<DomainRelativePath>
export type DomainRoutes = Record<DomainRoutesKey, StrictPathRouteObject<DomainRelativePath>>

type SegmentRoutesKey = CamelCase<SegmentRelativePath>
export type SegmentRoutes = Record<SegmentRoutesKey, StrictPathRouteObject<SegmentRelativePath>>

type ComponentsRoutesKey = CamelCase<ComponentsRelativePath>
export type ComponentsRoutes = Record<
  ComponentsRoutesKey,
  StrictPathRouteObject<ComponentsRelativePath>
>

// #endregion

// #region Navigations

export type DomainNavigation = DomainAbsolutePath
export type SegmentNavigation = SegmentAbsolutePath
export type ComponentsNavigation = ComponentsAbsolutePath

// #endregion

// #region Constants

export type Constants = {
  DOMAIN_NAVIGATION_LINKS: ConstantsDomainNavigationLink
  SEGMENT_NAVIGATION_LINKS: ConstantsSegmentNavigationLinks
  COMPONENTS_NAVIGATION_LINKS: ConstantsComponentsNavigationLinks
  NAVIGATION_LINKS: ConstantsNavigationLink
}

export type ConstantsNavigationLink = ConstantsDomainNavigationLink &
  ConstantsSegmentNavigationLinks &
  ConstantsComponentsNavigationLinks

type ConstantsDomainNavigationKey = DomainAbsolutePath
export type ConstantsDomainNavigationLink = Record<
  ConstantsDomainNavigationKey,
  GlobalNavigationConstants<DomainRelativePath, DomainAbsolutePath>
>

type ConstantsSegmentNavigationKey = SegmentAbsolutePath
export type ConstantsSegmentNavigationLinks = Record<
  ConstantsSegmentNavigationKey,
  GlobalNavigationConstants<SegmentRoutesKey, SegmentAbsolutePath>
>

type ConstantsComponentsNavigationKey = ComponentsAbsolutePath
export type ConstantsComponentsNavigationLinks = Record<
  ConstantsComponentsNavigationKey,
  GlobalNavigationConstants<ComponentsRelativePath, ComponentsAbsolutePath>
>

// #endregion
