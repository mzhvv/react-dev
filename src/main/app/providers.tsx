// src/main/app/providers.tsx

import { ThemeProvider } from '@business/features/theme'
import { I18nextProvider } from '@business/features/i18n'

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <I18nextProvider>{children}</I18nextProvider>
    </ThemeProvider>
  )
}
