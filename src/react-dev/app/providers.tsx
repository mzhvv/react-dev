// src/react-dev/app/main.tsx

import { ThemeProvider } from '@react-dev/entity/theme'
import { I18nextProvider } from '@react-dev/features/i18n'

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <I18nextProvider>{children}</I18nextProvider>
    </ThemeProvider>
  )
}
