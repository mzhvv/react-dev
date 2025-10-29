// src/react-dev/app/main.tsx

import { createRoot } from 'react-dom/client'

import './index.css'

import { lazy, StrictMode, Suspense } from 'react'
// import { LoadingFallback } from '@ui/components/fallback'

const LazyProviders = lazy(() =>
  import('./providers').then(module => ({
    default: module.Providers,
  }))
)
const LazyRouter = lazy(() =>
  import('../shared/global/libs/router').then(module => ({
    default: module.Router,
  }))
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense
      fallback={
        null
        // <LoadingFallback message='Loading providers and router ...' />
      }
    >
      <LazyProviders>
        <LazyRouter />
      </LazyProviders>
    </Suspense>
  </StrictMode>
)
