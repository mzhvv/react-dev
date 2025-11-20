// src/apps/accumulators/types-accumulate.ts

import type { Dashboard01DomainRoutePath } from '@apps/dashboard-01'
import type { Project0DomainRoutePath } from '@apps/project-0'
import type { UiDomainRoutePath } from '@apps/ui'

export type AppsDomainRoutePath =
  | Dashboard01DomainRoutePath
  | Project0DomainRoutePath
  | UiDomainRoutePath
