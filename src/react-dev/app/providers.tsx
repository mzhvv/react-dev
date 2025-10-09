// src/react-dev/app/providers.tsx

import { ThemeProvider } from '@react-dev/shared/libs/theme'

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
