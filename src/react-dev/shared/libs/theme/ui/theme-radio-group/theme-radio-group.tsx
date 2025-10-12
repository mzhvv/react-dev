// src/react-dev/shared/libs/theme/ui/theme-radio-group/theme-radio-group.tsx

import { themeRadioGroupVariants, themeRadioGroupVariantsConfig } from './config'

// const [visibleVariant, _] = themeRadioGroupVariants.splitVisibilityVariants(
//   themeRadioGroupVariantsConfig.defaultVariant
// )

const visibleVariant = themeRadioGroupVariants.getVisibleVariant(
  themeRadioGroupVariantsConfig.defaultVariant
)

export { visibleVariant as ThemeRadioGroup }
