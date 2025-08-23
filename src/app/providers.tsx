// src/app/providers.tsx

import { I18nextProvider } from '@/shared/lib/i18n'
import { ThemeProvider } from '@/shared/lib/theme'

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <I18nextProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </I18nextProvider>
  )
}
