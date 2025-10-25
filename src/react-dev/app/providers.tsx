import { ThemeProvider } from '@react-dev/entity/theme'
import { I18nextProvider } from '@global/libs/i18n'

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <I18nextProvider>{children}</I18nextProvider>
    </ThemeProvider>
  )
}
