// src/apps/__accumulators__/types.ts

import type { Dashboard01DomainRelativePath } from '@apps/dashboard-01'
import type { Project0DomainRelativePath } from '@apps/project-0'
import type { UiDomainRoutePath } from '@apps/ui'

export type AppsDomainRoutePath =
  | Dashboard01DomainRelativePath
  | UiDomainRoutePath
  | Project0DomainRelativePath
