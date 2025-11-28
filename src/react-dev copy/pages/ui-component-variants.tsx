import { Main, Header } from '@ui/layout-system'

import { LocalizationSection, ThemeSection } from '@react-dev/widgets/ui-component-variants'

export const UiComponentVariantsPage = () => {
  return (
    <Main>
      <Header>
        <h1>ui-component-variants</h1>
      </Header>
      <div>
        <LocalizationSection />
        <ThemeSection />
      </div>
    </Main>
  )
}
