// src/ui/layout-system/index.tsx

import { cn } from '@ui/lib'

const CONTAINER = 'max-w-screen-lg mx-auto px-4'

// Parent

export const Header: React.FC<React.PropsWithChildren<React.ComponentProps<'header'>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <header {...props} className={cn(CONTAINER, 'mb-0! flex h-17 items-center', className)}>
      {children}
    </header>
  )
}
export const Main: React.FC<React.PropsWithChildren<React.ComponentProps<'main'>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <main {...props} className={cn('space-y-4 pb-4', className)}>
      {children}
    </main>
  )
}

// Section

export const Section: React.FC<React.PropsWithChildren<React.ComponentProps<'section'>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section {...props} className={cn('space-y-4', className)}>
      {children}
    </section>
  )
}
export const SectionHeader: React.FC<React.PropsWithChildren<React.ComponentProps<'header'>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <header {...props} className={cn(CONTAINER, '', className)}>
      {children}
    </header>
  )
}
export const SectionContent: React.FC<React.PropsWithChildren<React.ComponentProps<'div'>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn(CONTAINER, '', className)}>
      {children}
    </div>
  )
}

// SubSection

export const SubSection: React.FC<React.PropsWithChildren<React.ComponentProps<'section'>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section {...props} className={cn('space-y-4', className)}>
      {children}
    </section>
  )
}
export const SubSectionHeader: React.FC<
  React.PropsWithChildren<React.ComponentProps<'header'>>
> = ({ children, ...props }) => {
  return <header {...props}>{children}</header>
}
export const SubSectionContent: React.FC<React.PropsWithChildren<React.ComponentProps<'div'>>> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>
}

// Article

export const Article: React.FC<React.PropsWithChildren<React.ComponentProps<'article'>>> = ({
  children,
  ...props
}) => {
  return <article {...props}>{children}</article>
}
export const ArticleHeader: React.FC<React.PropsWithChildren<React.ComponentProps<'header'>>> = ({
  children,
  ...props
}) => {
  return <header {...props}>{children}</header>
}
export const ArticleContent: React.FC<React.PropsWithChildren<React.ComponentProps<'div'>>> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>
}

// ModalSection

export const ModalSection: React.FC<React.PropsWithChildren<React.ComponentProps<'div'>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('p-2', className)} {...props}>
      {children}
    </div>
  )
}
export const ModalSectionHeader: React.FC<
  React.PropsWithChildren<React.ComponentProps<'header'>>
> = ({ children, ...props }) => {
  return <header {...props}>{children}</header>
}
export const ModalSectionContent: React.FC<
  React.PropsWithChildren<React.ComponentProps<'div'>>
> = ({ children, className, ...props }) => {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      {children}
    </div>
  )
}

// ModalSebSection

export const ModalSubSection: React.FC<React.PropsWithChildren<React.ComponentProps<'div'>>> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>
}
export const ModalSubSectionHeader: React.FC<
  React.PropsWithChildren<React.ComponentProps<'header'>> & { srOnly?: boolean }
> = ({ srOnly, children, className, ...props }) => {
  return (
    <header {...props} className={cn(srOnly && 'sr-only', className, '')}>
      {children}
    </header>
  )
}
export const ModalSubSectionContent: React.FC<
  React.PropsWithChildren<React.ComponentProps<'div'>>
> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}
