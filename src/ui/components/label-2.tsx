import { cn } from '../lib/utils'
import { Slot } from '@radix-ui/react-slot'

export const Label2: React.FC<
  React.ComponentProps<'div'> & {
    asChild?: boolean
  }
> = ({ children, className, asChild = false, ...props }) => {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      className={cn(
        'text-accent-foreground/70 flex h-8 w-full items-center px-2.5 text-xs font-medium',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
