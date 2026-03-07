// src/main/app/route.tsx

import type { MainRoute } from '@mzhvv/framework/acc-agg'
// import { LoadingFallback } from '@ui/components/fallback'
import { MainLayout } from '@main/pages/main-layout'

/* @description - ⚠️ Конфигурация маршрутов не требуется! */

export const mainRoute = {
  path: undefined,
  element: <MainLayout />,
  hydrateFallbackElement: <></>, // <LoadingFallback message='Loading hydrate ...' />,
} as const satisfies MainRoute
