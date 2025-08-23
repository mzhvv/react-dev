// src/shared/ui/ui/container.tsx

import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/shared/utils'

// types

type AsElement<T> = { asElement: T }

type ElementContainer = Extract<
  keyof React.JSX.IntrinsicElements,
  'main' | 'header' | 'nav' | 'footer'
>
type ElementHeaderAndFooterComponent = Exclude<ElementContainer, 'main'>

type StyleConfigEntry = { component: string; slot?: string }
type StyleBase = Record<keyof StyleConfigEntry, string>
type StyleConfig = Record<ElementContainer, StyleConfigEntry>

type BaseContainerProps = {
  children: React.PropsWithChildren['children']
  className?: React.HTMLAttributes<HTMLElement>['className']
}

type BaseContainerSlotProps = BaseContainerProps
type BaseComponentProps = BaseContainerProps

type ContainerProps = BaseContainerProps & AsElement<ElementContainer>
type HNFComponentProps = BaseComponentProps & AsElement<ElementHeaderAndFooterComponent>

// constants

const styleBase: StyleBase = {
  component: '',
  slot: 'mx-auto max-w-screen-xl',
} as const

const styleConfig: StyleConfig = {
  main: {
    component: 'min-h-[calc(100svh-180px)] *:not-first:mt-5 *:px-application',
  },
  header: {
    component: cn('border-b border-transparent'),
    slot: cn('h-[59px]', styleBase.slot),
  },
  nav: {
    component: cn(''),
    slot: cn(styleBase.slot, 'min-h-15'),
  },
  footer: {
    component: cn('border-t border-transparent'),
    slot: cn(styleBase.slot, 'min-h-15'),
  },
} as const

const Container: React.FC<ContainerProps> = ({ asElement, ...props }) => {
  if (asElement === 'main') return <MainComponent {...props} />
  return <HNFComponent asElement={asElement} {...props} />
}
const ContainerSlot: React.FC<BaseContainerSlotProps> = props => <div data-role='slot' {...props} />

export { Container as Component, ContainerSlot as Slot }

// ui/components

const MainComponent: React.FC<BaseComponentProps> = ({ children, className }) => {
  return <main className={cn(styleConfig.main.component, className)}>{children}</main>
}

// Header/Nav/Footer
const HNFComponent: React.FC<HNFComponentProps> = ({ asElement, children, className }) => {
  const Component = asElement as keyof React.JSX.IntrinsicElements
  const style = styleConfig[asElement]

  return (
    <Component className={cn(style.component, className)}>
      <Slot className={style.slot}>{children}</Slot>
    </Component>
  )
}
