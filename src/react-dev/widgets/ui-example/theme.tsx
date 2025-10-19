// src/react-dev/widgets/ui-example/theme.tsx

import { cssVariables } from '@styles'

import {
  useTheme,
  colorRadioGroupVariants,
  modeRadioGroupVariants,
} from '@react-dev/shared/libs/theme'

export const ThemeSection = () => {
  const { modes, mode, setMode, colors, color, setColor } = useTheme()

  return (
    <section id='theme' className='mx-auto max-w-screen-lg space-y-4 px-8'>
      <header>
        <h2>Theme</h2>
      </header>

      <section style={cssVariables} id='theme-color' className='space-y-4'>
        <header>
          <h3>Color</h3>
        </header>
        <fieldset className='space-y-4'>
          <legend className='sr-only'>Choose a color</legend>
          {colorRadioGroupVariants.components.map((Component, i) => (
            <div key={i} className='w-94'>
              <Component {...{ options: colors, value: color, onValueChange: setColor }} />
            </div>
          ))}
        </fieldset>
      </section>

      <section id='theme-mode' className='space-y-4'>
        <header>
          <h3>Mode</h3>
        </header>
        <fieldset className='space-y-4'>
          <legend className='sr-only'>Choose a mode</legend>
          {modeRadioGroupVariants.components.map((Component, i) => (
            <div key={i} className='w-94'>
              <Component {...{ options: modes, value: mode, onValueChange: setMode }} />
            </div>
          ))}
        </fieldset>
      </section>
    </section>
  )
}
