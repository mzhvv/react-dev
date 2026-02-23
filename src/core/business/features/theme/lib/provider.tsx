// src/core/features/theme/lib/provider.tsx

import { useEffect, useState, useCallback } from 'react'

import type { ThemeConfig, Color, Theme, Mode } from '../types'
import { themeConfig, modes, colors } from '../config/config'
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

  const setColor = useCallback(
    (newColor: Color) => {
      const root = window.document.documentElement
      root.setAttribute('color', newColor)
      localStorage.setItem(colorStorageKey, newColor)
      setColorState(newColor)
    },
    [colorStorageKey]
  )

  useEffect(() => {
    const root = window.document.documentElement

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

  useEffect(() => {
    const root = window.document.documentElement
    root.setAttribute('color', color)
  }, [color])

  const value = {
    themeMode: {
      mode,
      setMode: (mode: Mode) => {
        localStorage.setItem(modeStorageKey, mode)
        setMode(mode)
      },
      modes: modes,
    },

    themeColor: {
      color,
      setColor,
      colors: colors,
    },
  } as const satisfies Theme

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
