// src/react-dev/widgets/ui-example/theme.tsx

import { cssVariables } from '@styles'

import {
  useTheme,
  colorRadioGroupVariants,
  modeRadioGroupVariants,
} from '@react-dev/shared/libs/theme'

export const ThemeSection = () => {
  const { modes, mode, setMode, colors, color, setColor } = useTheme()

  const styles =
    'grid grid-cols-1 items-center justify-center *:p-3 md:grid-cols-1 lg:grid-cols-3 *:max-w-94'

  return (
    <section id='theme' className='mx-auto max-w-screen-lg px-3'>
      <header>
        <h2>Theme</h2>
      </header>

      <section id='theme-color' className='mt-3'>
        <header>
          <h3>Color</h3>
        </header>
        <fieldset>
          <legend className='sr-only'>Choose a color</legend>
          <div style={cssVariables} className={styles}>
            {colorRadioGroupVariants.components.map((Component, i) => (
              <Component key={i} {...{ options: colors, value: color, onValueChange: setColor }} />
            ))}
          </div>
        </fieldset>
      </section>

      <section id='theme-mode'>
        <header>
          <h3>Mode</h3>
        </header>
        <fieldset>
          <legend className='sr-only'>Choose a mode</legend>
          <div className={styles}>
            {modeRadioGroupVariants.components.map((Component, i) => (
              <Component key={i} {...{ options: modes, value: mode, onValueChange: setMode }} />
            ))}
          </div>
        </fieldset>
      </section>
    </section>
  )
}
