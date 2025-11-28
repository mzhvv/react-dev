// src/apps/__template-app__/app/routes.tsx

import type {
  DomainRoutes,
  EntranceRoutes,
  Routes,
  AAADomainRoutes,
  AAAChildrenRoutes,
} from '@template-app/shared/types/prnc'
import { Providers } from '@template-app/app/providers'
import { TemplateAppLayout } from '@template-app/pages/template-app-layout'
import { TemplateApp } from '@template-app/pages/template-app'

const domainRoutes = {
  templateApp: {
    path: 'template-app',
    element: <TemplateApp />,
  },
} as const satisfies DomainRoutes

const aaChildren = {
  aaaChildren1: {
    path: 'aaaChildren1',
    element: <></>,
  },
  aaaChildren2: {
    path: 'aaaChildren2',
    element: <></>,
  },
} as const satisfies AAAChildrenRoutes

const aaaRoutes = {
  aaaParent: {
    path: 'aaaParent',
    element: <></>,
    children: [...Object.values(aaChildren)],
  },
} as const satisfies AAADomainRoutes

const entranceRoutes = {
  path: undefined,
  element: <Providers />,
  children: [
    {
      path: undefined,
      element: <TemplateAppLayout />,
      children: [...Object.values(domainRoutes), ...Object.values(aaaRoutes)],
    },
  ],
} as const satisfies EntranceRoutes

export const routes = [entranceRoutes] as const satisfies Routes[]
