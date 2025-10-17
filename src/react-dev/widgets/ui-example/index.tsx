// src/react-dev/widgets/ui/index.tsx

import { colorRadioGroupVariants } from '@react-dev/shared/libs/theme'
import { useTheme } from '@react-dev/shared/libs/theme/model'
import { cssVariables } from '@react-dev/shared/libs/theme/ui/css-variables'
import { modeRadioGroupVariants } from '@react-dev/shared/libs/theme/ui/mode-radio-group/config'

export const UiPreview = () => {
  return (
    <>
      <ThemeSection />
    </>
  )
}

const ThemeSection = () => {
  const { modes, mode, setMode, colors, color, setColor } = useTheme()

  const styles =
    'grid grid-cols-1 items-center justify-center *:p-3 md:grid-cols-1 lg:grid-cols-3 *:max-w-94'

  return (
    <section id='theme' style={cssVariables} className='mx-auto max-w-screen-lg px-3'>
      <header>
        <h2>Theme</h2>
      </header>

      <section id='color' className='mt-3'>
        <header>
          <h3>Color</h3>
        </header>
        <fieldset>
          <legend className='sr-only'>Choose a color</legend>
          <div className={styles}>
            {colorRadioGroupVariants.components.map((Component, i) => (
              <Component key={i} {...{ options: colors, value: color, onValueChange: setColor }} />
            ))}
          </div>
        </fieldset>
      </section>

      <section id='mode'>
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
