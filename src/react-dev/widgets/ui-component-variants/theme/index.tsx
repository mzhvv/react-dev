// src/react-dev/widgets/ui-component-variants/theme/index.ts

import type { FactoryComponentsVariantProps } from '@factories/component-variants'
import { cssVariables } from '@styles'

import { Section, SectionContent, SectionHeader } from '@ui/layout-system'
import { Label2 } from '@ui/components/label-2'

import type {
  ThemeModeUi,
  ThemeColorUi,
  ThemeColorConstants,
  ThemeModeConstants,
  ColorRadioGroupProps,
  ModeRadioGroupProps,
} from '@react-dev/features/theme/types'
import {
  useThemeUi,
  useThemeConstants,
  colorRadioGroupVariants,
  modeRadioGroupVariants,
} from '@react-dev/features/theme'

export const ThemeSection = () => {
  const { themeColorUi, themeModeUi } = useThemeUi()
  const {
    theme: { heading },
    color,
    mode,
  } = useThemeConstants()

  return (
    <Section id='theme'>
      <SectionHeader>
        <h2>{heading}</h2>
      </SectionHeader>
      <SectionContent
        className='mx-auto max-w-108' // max-w-[375px]
      >
        <ThemeColorSection
          {...{
            themeColorUi,
            components: colorRadioGroupVariants.components,
            CONSTANTS: color,
            style: cssVariables,
          }}
        />
        <ThemeModeSection
          {...{
            themeModeUi,
            components: modeRadioGroupVariants.components,
            CONSTANTS: mode,
          }}
        />
      </SectionContent>
    </Section>
  )
}

const ThemeColorSection: React.FC<
  FactoryComponentsVariantProps<ColorRadioGroupProps> &
    (ThemeColorUi & { CONSTANTS: ThemeColorConstants }) &
    Pick<React.ComponentProps<'section'>, 'style'>
> = ({ components, themeColorUi, CONSTANTS: { legend, optionMap }, style }) => {
  return (
    <section id='theme-color' {...{ style }}>
      <header className='sr-only'>
        <h3>{legend}</h3>
      </header>

      <div>
        <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
          <Label2 asChild className='px-0'>
            <legend>{legend}</legend>
          </Label2>
          {components.map((Component, i) => (
            <Component key={i} {...{ themeColorUi, CONSTANTS: optionMap }} />
          ))}
        </fieldset>
      </div>
    </section>
  )
}

const ThemeModeSection: React.FC<
  FactoryComponentsVariantProps<ModeRadioGroupProps> &
    (ThemeModeUi & { CONSTANTS: ThemeModeConstants })
> = ({ components, themeModeUi, CONSTANTS: { legend, optionMap } }) => {
  return (
    <section id='theme-mode'>
      <header className='sr-only'>
        <h3>{legend}</h3>
      </header>

      <div>
        <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
          <Label2 asChild className='px-0'>
            <legend>{legend}</legend>
          </Label2>
          {components.map((Component, i) => (
            <Component key={i} {...{ themeModeUi, CONSTANTS: optionMap }} />
          ))}
        </fieldset>
      </div>
    </section>
  )
}
