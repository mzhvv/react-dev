// src/react-dev/shared/libs/theme/ui/theme-radio-group/theme-radio-group-variants.tsx

import type { ThemeRadioGroupProps } from '../types'
import { themeRadioGroupVariants, themeRadioGroupVariantsConfig } from './config'

// const [_, hiddenVariants] = themeRadioGroupVariants.splitVisibilityVariants(
//   themeRadioGroupVariantsConfig.defaultVariant
// )

const hiddenVariants = themeRadioGroupVariants.getHiddenVariants(
  themeRadioGroupVariantsConfig.defaultVariant
)

export const ThemeRadioGroupVariants: React.FC<ThemeRadioGroupProps> = props => {
  return hiddenVariants.map(({ variant: Variant }, i) => <Variant key={i} {...props} />)
}
