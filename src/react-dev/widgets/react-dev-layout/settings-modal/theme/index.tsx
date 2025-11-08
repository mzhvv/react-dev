// src/react-dev/widgets/react-dev-layout/settings-modal/theme/index.tsx

import { Label2 } from '@ui/components/label-2'

import type { FactoryComponentVariantProps } from '@factories/component-variants'
import { cssVariables, COLOR_MAP } from '@styles'

import type {
  ThemeColorSectionProps,
  ThemeModeSectionProps,
  ThemeModeRadioGroupProps,
  ThemeColorRadioGroupProps,
} from '@react-dev/features/theme'
import {
  themeColorRadioGroupVariants,
  themeModeRadioGroupVariants,
  useThemeConstants,
  useThemeUi,
} from '@react-dev/features/theme'

export const ThemeSections = () => {
  const { themeColor, themeMode } = useThemeUi()
  const {
    THEME: {
      themeSection: { heading },
    },
    COLOR,
    MODE,
  } = useThemeConstants()
  const ThemeColorDefaultComponent = themeColorRadioGroupVariants.getDefaultComponent()
  const ThemeModeDefaultComponent = themeModeRadioGroupVariants.getDefaultComponent()
  const style = { cssVariables, COLOR_MAP }

  return (
    <div className='p-2'>
      <h3>{heading}</h3>
      <ThemeColorSection
        {...{
          themeColor: themeColor,
          CONSTANTS: COLOR,
          component: ThemeColorDefaultComponent,
          style: style,
        }}
      />
      <ThemeModeSection
        {...{
          themeMode: themeMode,
          CONSTANTS: MODE,
          component: ThemeModeDefaultComponent,
        }}
      />
    </div>
  )
}

const ThemeColorSection: React.FC<
  ThemeColorSectionProps<FactoryComponentVariantProps<ThemeColorRadioGroupProps>>
> = ({
  themeColor,
  CONSTANTS: {
    themeColorSection: {
      // id,
      heading,
    },
    ...REST_CONSTANTS
  },
  style: { cssVariables, COLOR_MAP },
  component: Component,
}) => {
  return (
    <div {...{ style: cssVariables }}>
      <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
        <Label2 asChild className='px-0'>
          <legend>{heading}</legend>
        </Label2>
        <Component {...{ themeColor, CONSTANTS: REST_CONSTANTS, style: { COLOR_MAP } }} />
      </fieldset>
    </div>
  )
}

const ThemeModeSection: React.FC<
  ThemeModeSectionProps<FactoryComponentVariantProps<ThemeModeRadioGroupProps>>
> = ({
  themeMode,
  CONSTANTS: {
    themeModeSection: {
      // id,
      heading,
    },
    ...REST_CONSTANTS
  },
  component: Component,
}) => {
  return (
    <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
      <Label2 asChild className='px-0'>
        <legend>{heading}</legend>
      </Label2>
      <Component {...{ themeMode, CONSTANTS: REST_CONSTANTS }} />
    </fieldset>
  )
}
