// src/react-dev/widgets/react-dev-layout/settings-modal/theme/index.tsx

import {
  ModalSection,
  ModalSectionHeader,
  ModalSectionContent,
  ModalSubSection,
  ModalSubSectionContent,
  ModalSubSectionHeader,
} from '@ui/layout-system'

import type { FactoryComponentVariantProps } from '@factories/component-variants'
import { cssVariables, COLOR_MAP } from '@styles'

import type {
  ThemeColorSectionProps,
  ThemeModeSectionProps,
  ThemeModeRadioGroupProps,
  ThemeColorRadioGroupProps,
} from '@core/features/theme'
import {
  themeColorRadioGroupVariants,
  themeModeRadioGroupVariants,
  useThemeConstants,
  useThemeUi,
} from '@core/features/theme'

export const ThemeSections = () => {
  const { themeColor, themeMode } = useThemeUi()
  const {
    THEME: {
      themeSection: { heading },
    },
    THEME_COLOR,
    THEME_MODE,
  } = useThemeConstants()
  const ThemeColorDefaultComponent = themeColorRadioGroupVariants.getDefaultComponent()
  const ThemeModeDefaultComponent = themeModeRadioGroupVariants.getDefaultComponent()
  const style = { cssVariables, COLOR_MAP }

  return (
    <ModalSection>
      <ModalSectionHeader>
        <h3 className='text-base'>{heading}</h3>
      </ModalSectionHeader>
      <ModalSectionContent>
        <ThemeColorSection
          {...{
            themeColor: themeColor,
            CONSTANTS: THEME_COLOR,
            component: ThemeColorDefaultComponent,
            style: style,
          }}
        />
        <ThemeModeSection
          {...{
            themeMode: themeMode,
            CONSTANTS: THEME_MODE,
            component: ThemeModeDefaultComponent,
          }}
        />
      </ModalSectionContent>
    </ModalSection>
  )
}

const ThemeColorSection: React.FC<
  ThemeColorSectionProps<FactoryComponentVariantProps<ThemeColorRadioGroupProps>>
> = ({
  themeColor,
  CONSTANTS: {
    themeColorSection: { heading, HeadingIcon },
    ...REST_CONSTANTS
  },
  style: { cssVariables, COLOR_MAP },
  component: Component,
}) => {
  return (
    <ModalSubSection {...{ style: cssVariables }}>
      <ModalSubSectionHeader>
        <h4 className='inline-flex items-center gap-2'>
          {HeadingIcon && <HeadingIcon className='size-4' />}
          {heading}
        </h4>
      </ModalSubSectionHeader>
      <ModalSubSectionContent>
        <Component {...{ themeColor, CONSTANTS: REST_CONSTANTS, style: { COLOR_MAP } }} />
      </ModalSubSectionContent>
    </ModalSubSection>
  )
}

const ThemeModeSection: React.FC<
  ThemeModeSectionProps<FactoryComponentVariantProps<ThemeModeRadioGroupProps>>
> = ({
  themeMode,
  CONSTANTS: {
    themeModeSection: { heading, HeadingIcon },
    ...REST_CONSTANTS
  },
  component: Component,
}) => {
  return (
    <ModalSubSection>
      <ModalSubSectionHeader>
        <h4 className='inline-flex items-center gap-2'>
          {HeadingIcon && <HeadingIcon className='size-4' />}
          {heading}
        </h4>
      </ModalSubSectionHeader>
      <ModalSubSectionContent>
        <Component {...{ themeMode, CONSTANTS: REST_CONSTANTS }} />
      </ModalSubSectionContent>
    </ModalSubSection>
  )
}
