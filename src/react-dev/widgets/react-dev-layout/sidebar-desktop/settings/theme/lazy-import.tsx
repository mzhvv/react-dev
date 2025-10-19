// src/react-dev/shared/libs/theme/ui/mode-radio-group/mode-radio-group-variants.tsx

import type { ModeRadioGroupProps } from '@react-dev/features/theme'
import { modeRadioGroupVariants } from '@react-dev/features/theme'

// const [_, additionalVariants] = modeRadioGroupVariants.getSplitVariants()
const additionalVariants = modeRadioGroupVariants.getAdditionalVariants()

export const ModeRadioGroupVariants: React.FC<ModeRadioGroupProps> = props => {
  return additionalVariants.map((Component, i) => <Component key={i} {...props} />)
}
