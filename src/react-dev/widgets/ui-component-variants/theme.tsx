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
        <h2>Внешний вид</h2>
      </SectionHeader>

      <SectionContent
        className='mx-auto max-w-108' // max-w-[375px]
      >
        <section id='theme-color' style={cssVariables}>
          <header className='sr-only'>
            <h3>Цветовая схема</h3>
          </header>

          <div>
            <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
              <Label2 asChild className='px-0'>
                <legend>Цветовая схема</legend>
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

        <section id='theme-mode'>
          <header className='sr-only'>
            <h3>Режим темы</h3>
          </header>
          <div>
            <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
              <Label2 asChild className='px-0'>
                <legend>Режим темы</legend>
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
