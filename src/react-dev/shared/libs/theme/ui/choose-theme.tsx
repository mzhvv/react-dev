// src/react-dev/shared/libs/theme/ui/choose-theme.tsx

import { style } from '../constants'

import { ColorRadioGroup } from './color-radio-group'
import { ModeRadioGroup } from './mode-radio-group'

export const ChooseTheme = () => {
  return (
    <div style={style} className='space-y-3'>
      <ColorRadioGroup />
      <ModeRadioGroup />
    </div>
  )
}
