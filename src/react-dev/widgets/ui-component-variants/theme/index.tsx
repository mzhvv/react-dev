// src/react-dev/widgets/ui-component-variants/theme/index.ts

import { cssVariables } from '@styles'

import { Section, SectionContent, SectionHeader } from '@ui/layout-system'
import { Label2 } from '@ui/components/label-2'

import { useTheme } from '@react-dev/features/theme'
import { colorRadioGroupVariants, modeRadioGroupVariants } from '@react-dev/features/theme'
import { useThemeConstants } from '@react-dev/features/theme/ui/constants'
import type {
  ColorRadioGroupProps,
  ModeRadioGroupProps,
  ThemeColor,
  ThemeMode,
  ThemeModeData,
} from '@react-dev/features/theme/types'
import type { ComponentType } from 'react'
import type { FactoryComponentsVariantProps } from '@factories/component-variants'

export const ThemeSection = () => {
  const { themeMode, themeColor } = useTheme()

  const colorComponents = colorRadioGroupVariants.components

  const modeComponents = modeRadioGroupVariants.components
  const themeConstants = useThemeConstants()

  return (
    <Section id='theme'>
      <SectionHeader>
        <h2>{themeConstants.heading}</h2>
      </SectionHeader>
      <SectionContent
        className='mx-auto max-w-108' // max-w-[375px]
      >
        <ThemeColorSection
          {...{
            themeColor, // ThemeColor
            components: colorComponents,
          }}
        />
        <ThemeModeSection
          // prettier-ignore
          {...{
            themeMode, // ThemeMode
            components: modeComponents, // FactoryComponentsVariantProps<ModeRadioGroupProps>
            CONSTANTS: themeConstants.mode, // { CONSTANTS: ThemeModeData }
          }}
        />
      </SectionContent>
    </Section>
  )
}

const ThemeModeSection: React.FC<
  ThemeMode & FactoryComponentsVariantProps<ModeRadioGroupProps> & { CONSTANTS: ThemeModeData }
> = ({ themeMode, components, CONSTANTS }) => {
  const LEGEND = CONSTANTS.legend
  const componentProps = {
    state: {
      value: themeMode.mode,
      onValueChange: themeMode.setMode,
    },
    options: themeMode.modes,
    CONSTANTS: CONSTANTS.optionMap,
  } as const satisfies ModeRadioGroupProps

  return (
    <section id='theme-mode'>
      <header className='sr-only'>
        <h3>{LEGEND}</h3>
      </header>

      <div>
        <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
          <Label2 asChild className='px-0'>
            <legend>{LEGEND}</legend>
          </Label2>
          {components.map((Component, i) => (
            <Component key={i} {...componentProps} />
          ))}
        </fieldset>
      </div>
    </section>
  )
}

const ThemeColorSection: React.FC<
  ThemeColor & { components: ComponentType<ColorRadioGroupProps>[] }
> = ({ themeColor, components }) => {
  return (
    <section id='theme-color' style={cssVariables}>
      <header className='sr-only'>
        <h3>Цветовая схема</h3>
      </header>

      <div>
        <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
          <Label2 asChild className='px-0'>
            <legend>Цветовая схема</legend>
          </Label2>
          {components.map((Component, i) => (
            <Component
              key={i}
              {...{
                value: themeColor.color,
                onValueChange: themeColor.setColor,
                options: themeColor.colors,
              }}
            />
          ))}
        </fieldset>
      </div>
    </section>
  )
}
