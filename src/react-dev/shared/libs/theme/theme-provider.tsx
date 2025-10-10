// src/react-dev/shared/libs/theme/theme-provider.tsx
import { useEffect, useState } from 'react'
import type { Theme, Color } from './types'
import { themeConfig } from './config'
import { ThemeProviderContext } from './context'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultColor?: Color
  storageKey?: string
  colorStorageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = themeConfig.defaultTheme,
  defaultColor = themeConfig.defaultColor,
  storageKey = themeConfig.storageKey,
  colorStorageKey = themeConfig.colorStorageKey,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  const [color, setColor] = useState<Color>(
    () => (localStorage.getItem(colorStorageKey) as Color) || defaultColor
  )

  useEffect(() => {
    const root = window.document.documentElement

    // Устанавливаем тему
    root.classList.remove('light', 'dark')
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    // Устанавливаем цвет
    root.setAttribute('color', color)
  }, [theme, color])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
    color,
    setColor: (color: Color) => {
      localStorage.setItem(colorStorageKey, color)
      setColor(color)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
