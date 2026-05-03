// src/apps/settings/pages/settings.tsx

import {
  Main,
  Section,
  Header,
  SectionContent,
  SectionHeader,
} from '@packages/ui/mzhvv/layout-system'
const Page: React.FC<React.PropsWithChildren<React.ComponentProps<'div'>>> = ({ children }) => {
  return children
}

import { ThemeColor } from '../widgets/theme/color'
import { ThemeMode } from '../widgets/theme/mode'
import { LocalizationLanguage } from '../widgets/localization/language'

export const SettingsPage = () => {
  return (
    <Page>
      <Main>
        <Header>
          <h1>Settings</h1>
        </Header>

        <Section>
          <SectionHeader>Theme</SectionHeader>
          <SectionContent>
            <ul>
              <li>
                <ThemeMode />
              </li>
              <li>
                <ThemeColor />
              </li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionHeader>Localization</SectionHeader>
          <SectionContent>
            <ul>
              <li>
                <LocalizationLanguage />
              </li>
            </ul>
          </SectionContent>
        </Section>
      </Main>
    </Page>
  )
}
