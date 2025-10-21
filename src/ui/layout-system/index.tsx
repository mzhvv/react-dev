import { cn } from '@ui/lib'

import { styles } from './styles'
import React from 'react'

const container = styles.container

// Header

export const Header: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <header className={cn(container, 'pt-4', className)}>{children}</header>
}

// Main

export const Main: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <main className={cn('space-y-4', className)}>{children}</main>
}

// Section

export const Section: React.FC<React.ComponentProps<'section'> & { children: React.ReactNode }> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={cn('space-y-4', className)} {...props}>
      {children}
    </section>
  )
}

export const SectionHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <header className={cn(container, '', className)}>{children}</header>
}

export const SectionContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={cn(container, '', className)}>{children}</div>
}
