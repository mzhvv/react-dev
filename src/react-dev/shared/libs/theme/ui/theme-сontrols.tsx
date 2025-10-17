// src/react-dev/shared/libs/theme/ui/theme-сontrols.tsx

import { lazy } from 'react'

import { useTheme } from '../model'

import { cssVariables } from './css-variables'

import { HideVariantsAccordion } from './hide-variants-accordion'
import { ColorRadioGroup } from './color-radio-group'
import { ModeRadioGroup } from './mode-radio-group'

const LazyThemeRadioGroupVariants = lazy(() =>
  import(
    './mode-radio-group/mode-radio-group-variants' // (lazy) Импортируем из файла!
  ).then(module => ({
    default: module.ModeRadioGroupVariants,
  }))
)

export const ThemeControls = () => {
  const { modes, mode, setMode, colors, color, setColor } = useTheme()

  return (
    <div style={cssVariables} className='space-y-3'>
      <h2>Theme</h2>

      <fieldset className='space-y-3'>
        <legend className='text-foreground text-sm leading-none font-medium'>Choose a color</legend>
        <ColorRadioGroup {...{ options: colors, value: color, onValueChange: setColor }} />
      </fieldset>

      <fieldset className='space-y-3'>
        <legend className='text-foreground text-sm leading-none font-medium'>Choose a mode</legend>
        <ModeRadioGroup {...{ options: modes, value: mode, onValueChange: setMode }} />

        <HideVariantsAccordion
          accordionTitle='Choose a mode'
          fallbackHeight='h-[calc(215.95px-16px)]'
        >
          <LazyThemeRadioGroupVariants
            {...{ options: modes, value: mode, onValueChange: setMode }}
          />
        </HideVariantsAccordion>
      </fieldset>
    </div>
  )
}
