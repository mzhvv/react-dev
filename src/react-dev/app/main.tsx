// src/react-dev/app/main.tsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Router } from '@global/router'

import './index.css'
import { Providers } from './providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Router />
    </Providers>
  </StrictMode>
)
