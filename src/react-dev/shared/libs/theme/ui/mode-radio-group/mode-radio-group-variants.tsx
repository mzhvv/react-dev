// src/react-dev/shared/libs/theme/ui/mode-radio-group/mode-radio-group-variants.tsx

import type { ModeRadioGroupProps } from '../types'
import { modeRadioGroupVariants } from './config'

// const [_, otherVarints] = modeRadioGroupVariants.getSplitVariants()
const otherVarints = modeRadioGroupVariants.getOtherVarints()

export const ModeRadioGroupVariants: React.FC<ModeRadioGroupProps> = props => {
  return otherVarints.map((Component, i) => <Component key={i} {...props} />)
}
