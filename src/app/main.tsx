import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { Providers } from './providers'
import { Router } from '@/shared/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Router />
    </Providers>
  </StrictMode>
)
