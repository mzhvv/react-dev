// src/react-dev/app/main.tsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Router } from '@global/router'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
