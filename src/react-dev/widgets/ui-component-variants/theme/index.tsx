// src/react-dev/widgets/ui-component-variants/theme/index.tsx

import { Section, SectionContent, SectionHeader } from '@ui/layout-system'
import { Label2 } from '@ui/components/label-2'

import type { FactoryComponentsVariantProps } from '@factories/component-variants'
import { cssVariables, COLOR_MAP } from '@styles'

import type {
  ThemeColorRadioGroupProps,
  ThemeColorSectionProps,
  ThemeModeRadioGroupProps,
  ThemeModeSectionProps,
} from '@react-dev/features/theme'
import {
  useThemeUi,
  useThemeConstants,
  themeColorRadioGroupVariants,
  themeModeRadioGroupVariants,
} from '@react-dev/features/theme'

export const ThemeSection = () => {
  const { themeColor, themeMode } = useThemeUi()
  const {
    THEME: {
      themeSection: { id, heading },
    },
    COLOR,
    MODE,
  } = useThemeConstants()
  const themeColorComponents = themeColorRadioGroupVariants.components
  const themeModeComponents = themeModeRadioGroupVariants.components
  const style = { cssVariables, COLOR_MAP }

  return (
    <Section {...{ id }}>
      <SectionHeader>
        <h2>{heading}</h2>
      </SectionHeader>
      <SectionContent
        className='mx-auto max-w-108' // max-w-[375px]
      >
        <ThemeColorSection
          {...{
            themeColor: themeColor,
            CONSTANTS: COLOR,
            components: themeColorComponents,
            style: style,
          }}
        />
        <ThemeModeSection
          {...{
            themeMode: themeMode,
            CONSTANTS: MODE,
            components: themeModeComponents,
          }}
        />
      </SectionContent>
    </Section>
  )
}

const ThemeColorSection: React.FC<
  ThemeColorSectionProps<FactoryComponentsVariantProps<ThemeColorRadioGroupProps>>
> = ({
  themeColor,
  CONSTANTS: {
    themeColorSection: { id, heading },
    ...REST_CONSTANTS
  },
  style: { cssVariables, COLOR_MAP },
  components,
}) => {
  return (
    <section {...{ id }}>
      <header className='sr-only'>
        <h3>{heading}</h3>
      </header>

      <div {...{ style: cssVariables }}>
        <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
          <Label2 asChild className='px-0'>
            <legend>{heading}</legend>
          </Label2>
          {components.map((Component, i) => (
            <Component
              key={i}
              {...{
                themeColor: themeColor,
                CONSTANTS: REST_CONSTANTS,
                style: { COLOR_MAP },
              }}
            />
          ))}
        </fieldset>
      </div>
    </section>
  )
}

const ThemeModeSection: React.FC<
  ThemeModeSectionProps<FactoryComponentsVariantProps<ThemeModeRadioGroupProps>>
> = ({
  themeMode,
  CONSTANTS: {
    themeModeSection: { id, heading },
    ...REST_CONSTANTS
  },
  components,
}) => {
  return (
    <section {...{ id }}>
      <header className='sr-only'>
        <h3>{heading}</h3>
      </header>

      <div>
        <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
          <Label2 asChild className='px-0'>
            <legend>{heading}</legend>
          </Label2>
          {components.map((Component, i) => (
            <Component
              key={i}
              {...{
                themeMode: themeMode,
                CONSTANTS: REST_CONSTANTS,
              }}
            />
          ))}
        </fieldset>
      </div>
    </section>
  )
}
