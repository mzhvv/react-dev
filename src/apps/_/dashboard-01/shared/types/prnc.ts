// src/apps/dashboard-01/shared/types/prnc.ts
/** @description prnc = Paths-Routes-Navigations-Constants */

import type { StrictPathRouteObject } from '@libs/router'
import type { GlobalNavigationConstants } from '@libs/constants'
import type { CamelCase } from '@utils/string'

// #region Paths

type DomainRelativePath = 'dashboard-01'
type DomainAbsolutePath = `/${DomainRelativePath}`

// #endregion

// #region Routes

type DomainRoutesKey = CamelCase<DomainRelativePath>
export type DomainRoutes = Record<DomainRoutesKey, StrictPathRouteObject<DomainRelativePath>>

// #endregion

// #region Navigations

export type DomainNavigation = DomainAbsolutePath

// #endregion

// #region Constants

export type Constants = {
  DOMAIN_NAVIGATION_LINKS: ConstantsDomainNavigationLink
  NAVIGATION_LINKS: ConstantsNavigationLink
}

export type ConstantsNavigationLink = ConstantsDomainNavigationLink

type ConstantsDomainNavigationKey = DomainAbsolutePath
export type ConstantsDomainNavigationLink = Record<
  ConstantsDomainNavigationKey,
  GlobalNavigationConstants<DomainRelativePath, DomainAbsolutePath>
>

// #endregion
