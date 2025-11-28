import { RadioGroup, RadioGroupItem_V0 } from '@ui/components/radio-group'
import {
  Section,
  SectionHeader,
  SectionContent,
  Article,
  ArticleHeader,
  ArticleContent,
} from '@ui/layout-system'

export const RadioGroupSection = () => {
  return (
    <Section id='radio-group'>
      <SectionHeader>
        <h2>radio-group</h2>
      </SectionHeader>
      <SectionContent
        className='space-y-4' // max-w-[375px]
      >
        <RadioGroupV0Example />
      </SectionContent>
    </Section>
  )
}

// examples

const DATA = {
  id: 'id',
  value: 'value',
  title: 'title',
  label: 'label',
  ariaLabel: 'ariaLabel',
}

const RadioGroupV0Example = () => {
  return (
    <Article>
      <ArticleHeader>radio-group-v0</ArticleHeader>
      <ArticleContent>
        <RadioGroup>
          <RadioGroupItem_V0 {...DATA} />
        </RadioGroup>
      </ArticleContent>
    </Article>
  )
}
