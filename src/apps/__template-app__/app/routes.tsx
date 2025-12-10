// src/apps/__template-app__/app/routes.tsx

import { Outlet } from 'react-router'

import type {
  TemplateAppDomainRoutes,
  TestSegmentRoutes,
  TestDomainRoutes,
  EntranceRoutes,
  Routes,
} from '@template-app/shared/types/prnc'

import { Providers } from '@template-app/app/providers'
import { TemplateAppLayout } from '@template-app/pages/template-app-layout'
import { TemplateApp } from '@template-app/pages/template-app'

// Routes

const templateAppDomainRoutes = {
  templateApp: {
    path: 'template-app',
    element: <TemplateApp />,
  },
} as const satisfies TemplateAppDomainRoutes

const testSegmentRoutes = {
  testSegment1: {
    path: 'test-segment-1',
    element: 'test-segment-1',
  },
  testSegment2: {
    path: 'test-segment-2',
    element: 'test-segment-2',
  },
} as const satisfies TestSegmentRoutes

const testDomainRoutes = {
  testDomain: {
    path: 'test-domain',
    element: <Outlet />,
    children: [...Object.values(testSegmentRoutes)],
  },
} as const satisfies TestDomainRoutes

// Config

const domainRoutes = [...Object.values(templateAppDomainRoutes), ...Object.values(testDomainRoutes)]

const entranceRoutes = {
  path: undefined,
  element: <Providers />,
  children: [
    {
      path: undefined,
      element: <TemplateAppLayout />,
      children: [...domainRoutes],
    },
  ],
} as const satisfies EntranceRoutes

export const routes = [entranceRoutes] as const satisfies Routes[]
