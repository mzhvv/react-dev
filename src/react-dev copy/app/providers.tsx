// src/react-dev/app/providers.tsx

import { ThemeProvider } from '@core/features/theme'
import { I18nextProvider } from '@core/features/i18n'

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <I18nextProvider>{children}</I18nextProvider>
    </ThemeProvider>
  )
}
