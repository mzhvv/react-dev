// src/react-dev/features/theme/lib/provider.tsx

import { useEffect, useState, useCallback } from 'react'

import type { ThemeConfig, Color, Mode } from '../types'
import { colors, modes, themeConfig } from '../config/config'
import { ThemeProviderContext } from '../config/context'

type ThemeProviderProps = Partial<ThemeConfig> & {
  children: React.ReactNode
}

export function ThemeProvider({
  defaultMode = themeConfig.defaultMode,
  modeStorageKey = themeConfig.modeStorageKey,
  defaultColor = themeConfig.defaultColor,
  colorStorageKey = themeConfig.colorStorageKey,
  children,
  ...props
}: ThemeProviderProps) {
  const [mode, setMode] = useState<Mode>(
    () => (localStorage.getItem(modeStorageKey) as Mode) || defaultMode
  )

  const [color, setColorState] = useState<Color>(
    () => (localStorage.getItem(colorStorageKey) as Color) || defaultColor
  )

  // Функция для смены цвета
  const setColor = useCallback(
    (newColor: Color) => {
      const root = window.document.documentElement
      root.setAttribute('color', newColor)
      localStorage.setItem(colorStorageKey, newColor)
      setColorState(newColor)
    },
    [colorStorageKey]
  )

  // Эффект для установки темы (режим)
  useEffect(() => {
    const root = window.document.documentElement

    // Устанавливаем тему
    root.classList.remove('light', 'dark')
    if (mode === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(mode)
    }
  }, [mode])

  // Эффект для установки цвета (только при монтировании)
  useEffect(() => {
    const root = window.document.documentElement
    root.setAttribute('color', color)
  }, [color]) // Зависит от color для корректной работы

  const value = {
    modes: modes,
    mode,
    setMode: (mode: Mode) => {
      localStorage.setItem(modeStorageKey, mode)
      setMode(mode)
    },

    colors: colors,
    color,
    setColor, // используем нашу новую функцию
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
