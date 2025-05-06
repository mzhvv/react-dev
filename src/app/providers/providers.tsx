import type React from 'react'
import { ThemeProvider } from './theme-provider'

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
