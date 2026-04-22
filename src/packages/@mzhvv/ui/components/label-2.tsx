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
        'text-accent-foreground/70 inline-flex h-8 w-full items-center gap-2 px-2.5 text-xs font-medium',
        '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-3.5',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
