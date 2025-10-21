// src/react-dev/widgets/ui-example/theme.tsx

import { cssVariables } from '@styles'

import { Section, SectionContent, SectionHeader } from '@ui/layout-system'
import { Label2 } from '@ui/components/label-2'

import { useTheme } from '@react-dev/entity/theme'
import { colorRadioGroupVariants, modeRadioGroupVariants } from '@react-dev/features/theme'

export const ThemeSection = () => {
  const { modes, mode, setMode, colors, color, setColor } = useTheme()

  return (
    <Section id='theme'>
      <SectionHeader>
        <h2>Theme</h2>
      </SectionHeader>

      <SectionContent className='mx-auto max-w-110 space-y-1.5'>
        <section style={cssVariables}>
          <header className='sr-only'>
            <h3>Choose a color</h3>
          </header>

          <div>
            <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-1.5 [&>*:last-child]:mb-0'>
              <Label2 asChild>
                <legend>Choose a color</legend>
              </Label2>

              {colorRadioGroupVariants.components.map((Component, i) => (
                <Component
                  key={i}
                  {...{ options: colors, value: color, onValueChange: setColor }}
                />
              ))}
            </fieldset>
          </div>
        </section>

        <section>
          <header className='sr-only'>
            <h3>Choose a mode</h3>
          </header>
          <div>
            <fieldset className='[&>*:not(:first-child):not(:last-child)]:mb-3'>
              <Label2 asChild>
                <legend>Choose a mode</legend>
              </Label2>
              {modeRadioGroupVariants.components.map((Component, i) => (
                <Component key={i} {...{ options: modes, value: mode, onValueChange: setMode }} />
              ))}
            </fieldset>
          </div>
        </section>
      </SectionContent>
    </Section>
  )
}
