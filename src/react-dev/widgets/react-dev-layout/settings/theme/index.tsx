// src/react-dev/widgets/react-dev-layout/settings/theme/index.tsx

import type { FactoryComponentVariantProps } from '@factories/component-variants'
import { cssVariables } from '@styles'

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
    <div className='p-2'>
      <h3>{heading}</h3>
      <ThemeColorSection
        {...{
          themeColorUi,
          component: colorRadioGroupVariants.getDefaultComponent(),
          CONSTANTS: color,
          style: cssVariables,
        }}
      />
      <ThemeModeSection
        {...{
          themeModeUi,
          component: modeRadioGroupVariants.getDefaultComponent(),
          CONSTANTS: mode,
        }}
      />
    </div>
  )
}

const ThemeColorSection: React.FC<
  FactoryComponentVariantProps<ColorRadioGroupProps> &
    (ThemeColorUi & { CONSTANTS: ThemeColorConstants }) &
    Pick<React.ComponentProps<'div'>, 'style'>
> = ({ component: Component, themeColorUi, CONSTANTS: { legend, optionMap }, style }) => {
  return (
    <div {...{ style }}>
      <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
        <Label2 asChild className='px-0'>
          <legend>{legend}</legend>
        </Label2>
        <Component {...{ themeColorUi, CONSTANTS: optionMap }} />
      </fieldset>
    </div>
  )
}

const ThemeModeSection: React.FC<
  FactoryComponentVariantProps<ModeRadioGroupProps> &
    (ThemeModeUi & { CONSTANTS: ThemeModeConstants })
> = ({ component: Component, themeModeUi, CONSTANTS: { legend, optionMap } }) => {
  return (
    <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
      <Label2 asChild className='px-0'>
        <legend>{legend}</legend>
      </Label2>
      <Component {...{ themeModeUi, CONSTANTS: optionMap }} />
    </fieldset>
  )
}
