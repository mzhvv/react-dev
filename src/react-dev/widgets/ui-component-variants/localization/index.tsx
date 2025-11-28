// src/react-dev/widgets/ui-component-variants/localization/index.tsx

import { SectionHeader, SectionContent, Section } from '@ui/layout-system'
import { Label2 } from '@ui/components/label-2'

import type { FactoryComponentsVariantProps } from '@factories/component-variants'

import type {
  LocalizationConstants,
  LocalizationLanguagesUI,
  LocalizationRadioGroupProps,
} from '@core/features/i18n'
import {
  localizationLanguageRadioGroupVariants,
  useLocalizationUi,
  useLocalizationConstants,
} from '@core/features/i18n'

export const LocalizationSection = () => {
  const { localizationLanguagesUi } = useLocalizationUi()
  const localizationLanguageComponents = localizationLanguageRadioGroupVariants.components
  const {
    localization: { heading },
    language,
  } = useLocalizationConstants()

  return (
    <Section id='language'>
      <SectionHeader>
        <h2>{heading}</h2>
      </SectionHeader>
      <SectionContent
        className='mx-auto max-w-108' // max-w-[375px]
      >
        <LanguageSection
          {...{
            localizationLanguagesUi,
            components: localizationLanguageComponents,
            CONSTANTS: language,
          }}
        />
      </SectionContent>
    </Section>
  )
}

type LanguageSection = FactoryComponentsVariantProps<LocalizationRadioGroupProps> &
  (LocalizationLanguagesUI & { CONSTANTS: LocalizationConstants['language'] })
const LanguageSection: React.FC<LanguageSection> = ({
  localizationLanguagesUi,
  components,
  CONSTANTS: { legend, optionMap },
}) => {
  return (
    <section id='language'>
      <header className='sr-only'>
        <h3>{legend}</h3>
      </header>
      <div>
        <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
          <Label2 className='px-0'>{legend}</Label2>
          {components.map((Component, i) => (
            <Component key={i} {...{ localizationLanguagesUi, CONSTANTS: optionMap }} />
          ))}
        </fieldset>
      </div>
    </section>
  )
}
