// src/main/app/route.tsx

// import { LoadingFallback } from '@ui/components/fallback'

import type { MainRoute } from '@core/framework/acc-agg'

import { MainLayout } from '../pages/main-layout'

/* ✅ `Конфигурация маршрутов` и(→) `навигация` не требуется! */

export const mainRoute = {
  path: undefined,
  element: <MainLayout />,
  hydrateFallbackElement: <></>, // <LoadingFallback message='Loading hydrate ...' />,
} as const satisfies MainRoute
