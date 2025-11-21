// src/apps/new-app/shared/types/rnc.ts
/** @description rnc = Router-Navigation-Constants */

import type { CamelCase } from '@global/types/utils'

// #region Routes

export type DomainRelativePath = 'new-app'
export type DomainAbsolutePath = `/${DomainRelativePath}`
export type DomainKey = CamelCase<DomainRelativePath>

// #endregion

// #region Router

import type { StrictRouteObject } from '@global/router'

export type DomainRoutes = Record<DomainKey, StrictRouteObject<DomainRelativePath>>

// #endregion

// #region Navigation

export type DomainNavigationKey = DomainAbsolutePath

// #endregion

// #region Constants

import type { GlobalNavigationConstants } from '@global/constants'

export type DomainNavigationLinks = Record<
  DomainNavigationKey,
  GlobalNavigationConstants<DomainRelativePath, DomainAbsolutePath>
>

// #endregion
