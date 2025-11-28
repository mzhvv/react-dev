// src/react-dev/widgets/react-dev-layout/settings-modal/localization/index.tsx

import { Label2 } from '@ui/components/label-2'
import {
  localizationLanguageRadioGroupVariants,
  useLocalizationConstants,
  useLocalizationUi,
} from '@core/features/i18n'

export const LocalizationSections = () => {
  const { localizationLanguagesUi } = useLocalizationUi()
  const LocalizationLanguageComponent = localizationLanguageRadioGroupVariants.getDefaultComponent()
  const {
    localization: { heading },
    language: { legend, optionMap },
  } = useLocalizationConstants()

  return (
    <div className='p-2'>
      <h3>{heading}</h3>
      <div>
        <Label2 className='px-0'>{legend}</Label2>
        <LocalizationLanguageComponent {...{ localizationLanguagesUi, CONSTANTS: optionMap }} />
      </div>
    </div>
  )
}
