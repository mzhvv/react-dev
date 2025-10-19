import { ThemeProvider } from '@react-dev/entity/theme'

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
