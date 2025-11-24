// src/apps/dashboard-01/shared/types/rnc.ts
/** @description rnc = Router-Navigation-Constants */

import type { CamelCase } from '@utils/string'

// #region Routes

export type DomainRelativePath = 'dashboard-01'
export type DomainAbsolutePath = `/${DomainRelativePath}`
export type DomainKey = CamelCase<DomainRelativePath>

// #endregion

// #region Router

import type { StrictRouteObject } from '@libs/router'

export type DomainRoutes = Record<DomainKey, StrictRouteObject<DomainRelativePath>>

// #endregion

// #region Navigation

export type DomainNavigationKey = DomainAbsolutePath

// #endregion

// #region Constants

import type { GlobalNavigationConstants } from '@libs/constants'

export type DomainNavigationLinks = Record<
  DomainNavigationKey,
  GlobalNavigationConstants<DomainRelativePath, DomainAbsolutePath>
>

// #endregion
