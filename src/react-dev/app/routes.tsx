// src/react-dev/app/routes.tsx

import { ReactDevLayout } from '@react-dev/widgets/react-dev-layout'
import { ReactDevPage } from '@react-dev/pages/react-dev'

export const route = {
  path: undefined,
  element: <ReactDevLayout />,
  children: [{ path: '/', element: <ReactDevPage /> } as const],
} as const
