// src/react-dev/shared/libs/theme/theme-provider.tsx

import { useEffect, useState, useCallback } from 'react'

import type { ThemeConfig, Theme, Color } from './types'
import { themeConfig } from './config'
import { ThemeProviderContext } from './context'

type ThemeProviderProps = Partial<ThemeConfig> & {
  children: React.ReactNode
}

export function ThemeProvider({
  defaultTheme = themeConfig.defaultTheme,
  themeStorageKey = themeConfig.themeStorageKey,
  defaultColor = themeConfig.defaultColor,
  colorStorageKey = themeConfig.colorStorageKey,
  children,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(themeStorageKey) as Theme) || defaultTheme
  )

  // Убираем color из state - он не должен вызывать перерисовку
  const [color, setColorState] = useState<Color>(
    () => (localStorage.getItem(colorStorageKey) as Color) || defaultColor
  )

  // Функция для смены цвета без перерисовки
  const setColor = useCallback(
    (newColor: Color) => {
      const root = window.document.documentElement
      root.setAttribute('color', newColor)
      localStorage.setItem(colorStorageKey, newColor)
      setColorState(newColor) // только для контекста, но это вызовет перерисовку
    },
    [colorStorageKey]
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

    // Устанавливаем начальный цвет (только при монтировании)
    root.setAttribute('color', color)
  }, [theme]) // Убираем color из зависимостей!

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(themeStorageKey, theme)
      setTheme(theme)
    },
    color,
    setColor, // используем нашу новую функцию
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
