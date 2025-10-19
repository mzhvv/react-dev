// src/react-dev/entity/theme/lib/theme-provider.tsx

import { useEffect, useState, useCallback } from 'react'

import type { ThemeConfig, Color, Mode } from '../types'
import { colors, modes, themeConfig } from '../model/config'
import { ThemeProviderContext } from '../model/context'

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
    if (mode === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(mode)
    }

    // Устанавливаем начальный цвет (только при монтировании)
    root.setAttribute('color', color)
  }, [mode]) // Убираем color из зависимостей!

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
