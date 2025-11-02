// src/react-dev/widgets/react-dev-layout/settings/theme/index.tsx

import { cssVariables } from '@styles'

import { Label2 } from '@ui/components/label-2'

import { useTheme } from '@react-dev/features/theme'
import { colorRadioGroupVariants, modeRadioGroupVariants } from '@react-dev/features/theme'
import { useThemeConstants } from '@react-dev/features/theme/ui/constants'

export const ThemeControls = () => {
  return (
    <div className='p-2'>
      <h3>Внешний вид</h3>
      <Color />
      <Mode />
    </div>
  )
}

const Mode = () => {
  const { themeMode } = useTheme()
  const ModeRadioGroup = modeRadioGroupVariants.getDefaultComponent()
  const CONSTANTS_MODE = useThemeConstants().mode

  const LEGEND = CONSTANTS_MODE.legend

  const componentProps = {
    state: {
      value: themeMode.mode,
      onValueChange: themeMode.setMode,
    },
    options: themeMode.modes,
    CONSTANTS: CONSTANTS_MODE.optionMap,
  } // as const satisfies ModeRadioGroupProps

  return (
    <fieldset>
      <Label2 asChild className='px-0'>
        <legend>{LEGEND}</legend>
      </Label2>
      <ModeRadioGroup {...componentProps} />
    </fieldset>
  )
}

const Color = () => {
  const ColorRadioGroup = colorRadioGroupVariants.getDefaultComponent()
  const { themeColor } = useTheme()

  return (
    <fieldset style={cssVariables}>
      <Label2 asChild className='px-0'>
        <legend>Цветовая схема</legend>
      </Label2>
      <ColorRadioGroup
        {...{
          value: themeColor.color,
          onValueChange: themeColor.setColor,
          options: themeColor.colors,
        }}
      />
    </fieldset>
  )
}
