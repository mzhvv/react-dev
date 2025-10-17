import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Router } from '@global/router'
import { Providers } from './providers'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Router />
    </Providers>
  </StrictMode>
)
