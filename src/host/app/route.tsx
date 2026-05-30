// src/host/app/route.tsx

// import { LoadingFallback } from '@ui/components/fallback'

import type { MainRoute } from '@core/configs/framework/dataConfig'

import { HostLayout } from '../pages/host-layout'

/* ✅ `Конфигурация маршрутов` и(→) `навигация` не требуется! */

export const mainRoute = {
  path: undefined,
  element: <HostLayout />,
  hydrateFallbackElement: <></>, // <LoadingFallback message='Loading hydrate ...' />,
} as const satisfies MainRoute
