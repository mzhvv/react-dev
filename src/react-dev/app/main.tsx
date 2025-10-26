// src/react-dev/app/main.tsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Router } from '@global/libs/router'
import { Providers } from './providers'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Router />
    </Providers>
  </StrictMode>
)
