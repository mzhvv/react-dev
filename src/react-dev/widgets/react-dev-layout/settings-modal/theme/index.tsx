// src/react-dev/widgets/react-dev-layout/settings-modal/theme/index.tsx

import type { FactoryComponentVariantProps } from '@factories/component-variants'
import type {
  ThemeColorRadioGroupProps,
  ThemeColorUi,
  ThemeColorConstant,
  ThemeModeRadioGroupProps,
  ThemeModeUi,
  ThemeModeConstant,
  ThemeConstant,
} from '@react-dev/features/theme/types'

import { Label2 } from '@ui/components/label-2'

type ThemeColorSectionProps = FactoryComponentVariantProps<ThemeColorRadioGroupProps> &
  (ThemeColorUi & { CONSTANTS: ThemeColorConstant }) &
  (Pick<React.ComponentProps<'div'>, 'style'> & Pick<ThemeColorRadioGroupProps, 'colorMap'>)

type ThemeModeSectionProps = FactoryComponentVariantProps<ThemeModeRadioGroupProps> &
  (ThemeModeUi & { CONSTANTS: ThemeModeConstant })

interface ThemeSectionsProps {
  themeColorSection: ThemeColorSectionProps
  themeModeSection: ThemeModeSectionProps
  CONSTANTS: ThemeConstant
}

export const ThemeSections: React.FC<ThemeSectionsProps> = ({
  themeColorSection,
  themeModeSection,
  CONSTANTS: { heading },
}) => {
  return (
    <div className='p-2'>
      <h3>{heading}</h3>
      <ThemeColorSection {...themeColorSection} />
      <ThemeModeSection {...themeModeSection} />
    </div>
  )
}

const ThemeColorSection: React.FC<ThemeColorSectionProps> = ({
  component: Component,
  themeColorUi,
  CONSTANTS: { legend, optionMap },
  style,
  colorMap,
}) => {
  return (
    <div {...{ style }}>
      <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
        <Label2 asChild className='px-0'>
          <legend>{legend}</legend>
        </Label2>
        <Component {...{ themeColorUi, CONSTANTS: optionMap, colorMap: colorMap }} />
      </fieldset>
    </div>
  )
}

const ThemeModeSection: React.FC<ThemeModeSectionProps> = ({
  component: Component,
  themeModeUi,
  CONSTANTS: { legend, optionMap },
}) => {
  return (
    <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
      <Label2 asChild className='px-0'>
        <legend>{legend}</legend>
      </Label2>
      <Component {...{ themeModeUi, CONSTANTS: optionMap }} />
    </fieldset>
  )
}
