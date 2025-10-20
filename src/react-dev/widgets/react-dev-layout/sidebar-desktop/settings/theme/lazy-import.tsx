// src/react-dev/shared/libs/theme/ui/mode-radio-group/mode-radio-group-variants.tsx

import type { ModeRadioGroupProps } from '@react-dev/features/theme'
import { modeRadioGroupVariants } from '@react-dev/features/theme'

// const [_, nonDefaultComponents] = modeRadioGroupVariants.getNonDefaultComponents()
const nonDefaultComponents = modeRadioGroupVariants.getNonDefaultComponents()

export const ModeRadioGroupVariants: React.FC<ModeRadioGroupProps> = props => {
  return nonDefaultComponents.map((Component, i) => <Component key={i} {...props} />)
}
