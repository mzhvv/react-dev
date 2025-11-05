import { languageSwitcherRadioVariants, useLanguageSwitcher } from '@react-dev/features/i18n'
import { Label2 } from '@ui/components/label-2'
import { SectionHeader, SectionContent, Section } from '@ui/layout-system'
import { useTranslation } from 'react-i18next'

export const LocalizationSection = () => {
  return (
    <Section id='language'>
      <SectionHeader>
        <h2>language</h2>
        {/* {t('settings.localization.heading')} */}
      </SectionHeader>
      <SectionContent
        className='mx-auto max-w-108' // max-w-[375px]
      >
        <LanguageSection />
      </SectionContent>
    </Section>
  )
}

const LanguageSection = () => {
  const { t } = useTranslation('settings')
  const LanguageSwitcherRadio = languageSwitcherRadioVariants.getDefaultComponent()
  const { currentLang, languages, handleLanguageChange } = useLanguageSwitcher()

  return (
    <section id='language'>
      <header className='sr-only'>
        <h3>{t('settings.localization.heading')}</h3>
      </header>
      <div>
        <fieldset className='[&>*]:mb-3 [&>*:first-child]:mb-0 [&>*:last-child]:mb-0'>
          <Label2 className='px-0'>{t('settings.localization.heading')}</Label2>
          <LanguageSwitcherRadio
            {...{ options: languages, value: currentLang, onValueChange: handleLanguageChange }}
          />
        </fieldset>
      </div>
    </section>
  )
}
