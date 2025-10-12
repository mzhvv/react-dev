// src/react-dev/shared/libs/theme/ui/theme-сontrols.tsx

import { lazy, useId } from 'react'

import { useTheme } from '../model'

import type { ColorOption, ThemeOption } from './types'
import { style } from './constants'
import { HideVariantsAccordion } from './hide-variants-accordion'
import { ColorRadioGroup } from './color-radio-group'

import { ThemeRadioGroup } from './theme-radio-group'
const LazyThemeRadioGroupVariants = lazy(() =>
  import(
    './theme-radio-group/theme-radio-group-variants' // (lazy) Импортируем из файла!
  ).then(module => ({
    default: module.ThemeRadioGroupVariants,
  }))
)

const COLOR_OPTIONS = [
  { value: 'neutral', label: 'Neutral' },
  { value: 'blue', label: 'Blue' },
] as const satisfies ColorOption[]

const THEME_OPTIONS = [
  { value: 'system', label: 'System', image: '/ui-system.png' },
  { value: 'light', label: 'Light', image: '/ui-light.png' },
  { value: 'dark', label: 'Dark', image: '/ui-dark.png' },
] as const satisfies ThemeOption[]

export const ThemeControls = () => {
  const id = useId()

  const { color, setColor, theme, setTheme } = useTheme()
  const onColorChange = (value: string) => setColor(value as ColorOption['value'])
  const onThemeChange = (value: string) => setTheme(value as ThemeOption['value'])

  return (
    <div style={style} className='space-y-3'>
      <h2>Theme</h2>

      <fieldset className='space-y-3'>
        <legend className='text-foreground text-sm leading-none font-medium'>Choose a color</legend>
        <ColorRadioGroup {...{ options: COLOR_OPTIONS, color, onColorChange }} />
      </fieldset>

      <fieldset className='space-y-3'>
        <legend className='text-foreground text-sm leading-none font-medium'>Choose a mode</legend>
        <ThemeRadioGroup {...{ options: THEME_OPTIONS, theme, onThemeChange, id }} />

        <HideVariantsAccordion
          accordionTitle='Choose a mode'
          fallbackHeight='h-[calc(215.95px-16px)]'
        >
          <LazyThemeRadioGroupVariants {...{ options: THEME_OPTIONS, theme, onThemeChange, id }} />
        </HideVariantsAccordion>
      </fieldset>
    </div>
  )
}
