// src/apps/__template-app__/app/routes.tsx

import type { DomainRoutes, EntranceRoutes, Routes } from '@template-app/shared/types/prnc'
import { Providers } from '@template-app/app/providers'
import { TemplateAppLayout } from '@template-app/pages/template-app-layout'
import { TemplateApp } from '@template-app/pages/template-app'

const domainRoutes = {
  templateApp: {
    path: 'template-app',
    element: <TemplateApp />,
  },
} as const satisfies DomainRoutes

const entranceRoutes = {
  path: undefined,
  element: <Providers />,
  children: [
    {
      path: undefined,
      element: <TemplateAppLayout />,
      children: Object.values(domainRoutes),
    },
  ],
} as const satisfies EntranceRoutes

export const routes = [entranceRoutes] as const satisfies Routes[]
