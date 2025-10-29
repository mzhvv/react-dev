// src/react-dev/widgets/react-dev-layout/sidebar-desktop/settings/theme/theme.tsx

// import { lazy, Suspense } from 'react'
import { cssVariables } from '@styles'

import { Label2 } from '@ui/components/label-2'
// import { Skeleton } from '@ui/components/skeleton'

import { useTheme } from '@react-dev/features/theme'
import { colorRadioGroupVariants, modeRadioGroupVariants } from '@react-dev/features/theme'

// const LazyModeadioGroupVariants = lazy(() =>
//   import('./lazy-import').then(module => ({
//     default: module.ModeRadioGroupVariants,
//   }))
// )

export const ThemeControls = () => {
  const { modes, mode, setMode, colors, color, setColor } = useTheme()

  const ColorRadioGroup = colorRadioGroupVariants.getDefaultComponent()
  const ModeRadioGroup = modeRadioGroupVariants.getDefaultComponent()

  return (
    <div className='p-2'>
      <h3>Внешний вид</h3>

      <fieldset style={cssVariables}>
        <Label2 asChild className='px-0'>
          <legend>Цветовая схема</legend>
        </Label2>
        <ColorRadioGroup {...{ options: colors, value: color, onValueChange: setColor }} />
      </fieldset>

      <fieldset>
        <Label2 asChild className='px-0'>
          <legend>Режим темы</legend>
        </Label2>
        <ModeRadioGroup {...{ options: modes, value: mode, onValueChange: setMode }} />

        {/* <Suspense fallback={<Skeleton className='h-[calc(60px+12px+93.063px)]' />}>
          <LazyModeadioGroupVariants {...{ options: modes, value: mode, onValueChange: setMode }} />
        </Suspense> */}
      </fieldset>
    </div>
  )
}
