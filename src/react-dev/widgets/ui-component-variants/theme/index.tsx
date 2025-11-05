// src/react-dev/widgets/ui-component-variants/theme/index.tsx

import { Section, SectionContent, SectionHeader } from '@ui/layout-system'
import { Label2 } from '@ui/components/label-2'

import type { FactoryComponentsVariantProps } from '@factories/component-variants'
import { colorMap, cssVariables } from '@styles'

import type {
  ThemeColorUi,
  ThemeModeUi,
  ThemeColorConstant,
  ThemeModeConstant,
  ThemeColorRadioGroupProps,
  ThemeModeRadioGroupProps,
} from '@react-dev/features/theme/types'
import {
  useThemeUi,
  themeColorRadioGroupVariants,
  themeModeRadioGroupVariants,
  useThemeConstants,
} from '@react-dev/features/theme'

export const ThemeSection = () => {
  const { themeColorUi, themeModeUi } = useThemeUi()
  const themeColorComponents = themeColorRadioGroupVariants.components
  const themeModeComponents = themeModeRadioGroupVariants.components
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
            components: themeColorComponents,
            CONSTANTS: color,
            style: cssVariables,
            colorMap: colorMap,
          }}
        />
        <ThemeModeSection
          {...{
            themeModeUi,
            components: themeModeComponents,
            CONSTANTS: mode,
          }}
        />
      </SectionContent>
    </Section>
  )
}

type ThemeColorSection = FactoryComponentsVariantProps<ThemeColorRadioGroupProps> &
  (ThemeColorUi & { CONSTANTS: ThemeColorConstant }) &
  (Pick<React.ComponentProps<'div'>, 'style'> & Pick<ThemeColorRadioGroupProps, 'colorMap'>)
const ThemeColorSection: React.FC<ThemeColorSection> = ({
  components,
  themeColorUi,
  CONSTANTS: { legend, optionMap },
  style,
  colorMap,
}) => {
  return (
    <section id='theme-color'>
      <header className='sr-only'>
        <h3>{legend}</h3>
      </header>

      <div {...{ style }}>
        <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
          <Label2 asChild className='px-0'>
            <legend>{legend}</legend>
          </Label2>
          {components.map((Component, i) => (
            <Component key={i} {...{ themeColorUi, CONSTANTS: optionMap, colorMap: colorMap }} />
          ))}
        </fieldset>
      </div>
    </section>
  )
}

type ThemeModeSectionProps = FactoryComponentsVariantProps<ThemeModeRadioGroupProps> &
  (ThemeModeUi & { CONSTANTS: ThemeModeConstant })
const ThemeModeSection: React.FC<ThemeModeSectionProps> = ({
  components,
  themeModeUi,
  CONSTANTS: { legend, optionMap },
}) => {
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
