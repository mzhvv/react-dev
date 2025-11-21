// src/apps/__accumulators__/types.ts

import type { Dashboard01DomainRelativePath } from '@apps/dashboard-01'
import type { UiDomainRoutePath } from '@apps/ui'
import type { Project0DomainRelativePath } from '@apps/project-0'

export type AppsDomainRoutePath =
  | Dashboard01DomainRelativePath
  | UiDomainRoutePath
  | Project0DomainRelativePath
