import { RadioGroup } from '@ui/components/radio-group'
import type { ColorRadioGroupProps } from '../../types'

export const Variant0: React.FC<ColorRadioGroupProps> = ({ options, ...props }) => {
  return (
    <RadioGroup aria-label='Choose theme' className='flex items-center gap-3' {...props}>
      {options.map(option => (
        <RadioGroup key={`v1-${option}`} value={option} id={`v1-${option}`} />
      ))}
    </RadioGroup>
  )
}
