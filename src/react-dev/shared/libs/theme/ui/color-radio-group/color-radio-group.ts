// src/react-dev/shared/libs/theme/ui/color-radio-group/color-radio-group.ts

import { colorRadioGroupVariants, colorRadioGroupVariantsConfig } from './config'

const visibleVariant = colorRadioGroupVariants.getVisibleVariant(
  colorRadioGroupVariantsConfig.defaultVariant
)

export { visibleVariant as ColorRadioGroup }
