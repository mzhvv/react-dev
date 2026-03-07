// src/main/app/route.tsx

import type { MainRoute } from '@core/framework/acc-agg'
import { MainLayout } from '@main/pages/main-layout'

// import { LoadingFallback } from '@ui/components/fallback'

/* ⚠️ Конфигурация маршрутов не требуется! */

export const mainRoute = {
  path: undefined,
  element: <MainLayout />,
  hydrateFallbackElement: <></>, // <LoadingFallback message='Loading hydrate ...' />,
} as const satisfies MainRoute
