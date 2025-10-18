// src/react-dev/widgets/react-dev-layout/sidebar/settings/theme/theme.tsx

import { lazy, Suspense } from 'react'

import { cssVariables } from '@styles'

import { Skeleton } from '@ui/components/skeleton'

import {
  useTheme,
  colorRadioGroupVariants,
  modeRadioGroupVariants,
} from '@react-dev/shared/libs/theme'

const LazyModeadioGroupVariants = lazy(() =>
  import('./lazy-import').then(module => ({
    default: module.ModeRadioGroupVariants,
  }))
)

export const ThemeControls = () => {
  const { modes, mode, setMode, colors, color, setColor } = useTheme()

  const ColorRadioGroup = colorRadioGroupVariants.getDefaultVariant()
  const ModeRadioGroup = modeRadioGroupVariants.getDefaultVariant()

  return (
    <div className='space-y-3'>
      <h2>Theme</h2>

      <fieldset style={cssVariables} className='space-y-3'>
        <legend className='text-foreground text-sm leading-none font-medium'>Choose a color</legend>
        <ColorRadioGroup {...{ options: colors, value: color, onValueChange: setColor }} />
      </fieldset>

      <fieldset className='space-y-3'>
        <legend className='text-foreground text-sm leading-none font-medium'>Choose a mode</legend>
        <ModeRadioGroup {...{ options: modes, value: mode, onValueChange: setMode }} />

        <Suspense fallback={<Skeleton className='h-[calc(60px+12px+93.063px)]' />}>
          <LazyModeadioGroupVariants {...{ options: modes, value: mode, onValueChange: setMode }} />
        </Suspense>
      </fieldset>
    </div>
  )
}
