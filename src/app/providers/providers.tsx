import { ReduxProvider } from './redux-provider'
import { ThemeProvider } from './theme-provider'

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReduxProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  )
}
