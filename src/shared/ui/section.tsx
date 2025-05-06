// src/shared/ui/ui/section.tsx

import { Slot } from '@radix-ui/react-slot'
import { cn } from '../utils'

// types

type BaseSectionProps = {
  children: React.PropsWithChildren['children']
  className?: React.HTMLAttributes<HTMLElement>['className']
}

type SectionProps = { useSlot?: boolean } & {
  id?: string
  dataId?: string
} & BaseSectionProps
type SectionSlotProps = BaseSectionProps
type SectionHeaderProps = BaseSectionProps
type SectionContentProps = BaseSectionProps
type SectionFooterProps = BaseSectionProps

// ui

const Section: React.FC<SectionProps> = ({ id, dataId, useSlot = true, children, className }) => {
  return (
    <section id={id} data-id={dataId} className={className}>
      {useSlot ? <Slot className='mx-auto max-w-screen-xl *:mt-5'>{children}</Slot> : children}
    </section>
  )
}

const SectionSlot: React.FC<SectionSlotProps> = props => <div data-role='slot' {...props} />

const SectionHeader: React.FC<SectionHeaderProps> = ({ children, className }) => {
  return <header className={cn('text-center', className)}>{children}</header>
}

const SectionContent: React.FC<SectionContentProps> = ({ children, className }) => {
  return (
    <div data-role='content' className={className}>
      {children}
    </div>
  )
}

const SectionFooter: React.FC<SectionFooterProps> = ({ children, className }) => {
  return <footer className={className}>{children}</footer>
}

export {
  Section as Component,
  SectionSlot as Slot,
  SectionHeader as Header,
  SectionContent as Content,
  SectionFooter as Footer,
}
