// src/react-dev/widgets/ui-component-variants/theme/index.tsx

import {
  Article,
  ArticleContent,
  ArticleHeader,
  Section,
  SectionContent,
  SectionHeader,
  SubSection,
  SubSectionContent,
  SubSectionHeader,
} from '@ui/layout-system'
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
    THEME_COLOR,
    THEME_MODE,
  } = useThemeConstants()
  const themeColorComponents = themeColorRadioGroupVariants.components
  const themeModeComponents = themeModeRadioGroupVariants.components
  const style = { cssVariables, COLOR_MAP }

  return (
    <Section {...{ id }} className='space-y-4'>
      <SectionHeader>
        <h2>{heading}</h2>
      </SectionHeader>
      <SectionContent
        className='space-y-4' // max-w-[375px]
      >
        <ThemeColorSection
          {...{
            themeColor: themeColor,
            CONSTANTS: THEME_COLOR,
            components: themeColorComponents,
            style: style,
          }}
        />
        <ThemeModeSection
          {...{
            themeMode: themeMode,
            CONSTANTS: THEME_MODE,
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
    themeColorSection: { id, heading, HeadingIcon },
    ...REST_CONSTANTS
  },
  style: { cssVariables, COLOR_MAP },
  components,
}) => {
  return (
    <SubSection {...{ id, heading, style: cssVariables }}>
      <SubSectionHeader>
        <h3 className='inline-flex items-center gap-2'>
          {HeadingIcon && <HeadingIcon className='size-4' />}
          {heading}
        </h3>
      </SubSectionHeader>
      <SubSectionContent className='mx-auto max-w-106 space-y-4'>
        {components.map((Component, i) => (
          <Article key={i}>
            <ArticleHeader>
              <Label2 asChild className='px-0'>
                <h4>{`Вариант ${i}`}</h4>
              </Label2>
            </ArticleHeader>
            <ArticleContent className='rounded-md border p-4'>
              <Component
                {...{
                  themeColor: themeColor,
                  CONSTANTS: REST_CONSTANTS,
                  style: { COLOR_MAP },
                }}
              />
            </ArticleContent>
          </Article>
        ))}
      </SubSectionContent>
    </SubSection>
  )
}

const ThemeModeSection: React.FC<
  ThemeModeSectionProps<FactoryComponentsVariantProps<ThemeModeRadioGroupProps>>
> = ({
  themeMode,
  CONSTANTS: {
    themeModeSection: { id, heading, HeadingIcon },
    ...REST_CONSTANTS
  },
  components,
}) => {
  return (
    <SubSection {...{ id, heading }}>
      <SubSectionHeader>
        <h3 className='inline-flex items-center gap-2'>
          {HeadingIcon && <HeadingIcon className='size-4' />}
          {heading}
        </h3>
      </SubSectionHeader>
      <SubSectionContent className='mx-auto max-w-106 space-y-4'>
        {components.map((Component, i) => (
          <Article key={i}>
            <ArticleHeader>
              <Label2 asChild className='px-0'>
                <h4>{`Вариант ${i}`}</h4>
              </Label2>
            </ArticleHeader>
            <ArticleContent className='rounded-md border p-4'>
              <Component
                {...{
                  themeMode: themeMode,
                  CONSTANTS: REST_CONSTANTS,
                }}
              />
            </ArticleContent>
          </Article>
        ))}
      </SubSectionContent>
    </SubSection>
  )
}
