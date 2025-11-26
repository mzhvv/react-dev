// src/apps/__template-app__/shared/types/prnc.ts
/** @description prnc = Paths-Routes-Navigations-Constants */

import type { StrictPathRouteObject } from '@libs/router'
import type { GlobalNavigationConstants } from '@libs/constants'
import type { CamelCase } from '@utils/string'

// #region Paths

type DomainRelativePath = 'template-app'
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
  NAVIGATION_LINKS: ConstantsNavigationLink

  DOMAIN_NAVIGATION_LINKS: ConstantsDomainNavigationLink
}

export type ConstantsNavigationLink = ConstantsDomainNavigationLink

type ConstantsDomainNavigationKey = DomainAbsolutePath
export type ConstantsDomainNavigationLink = Record<
  ConstantsDomainNavigationKey,
  GlobalNavigationConstants<DomainRelativePath, DomainAbsolutePath>
>

// #endregion
