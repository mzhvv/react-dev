// src/react-dev/global/navigation/types.ts

export type SectionKeyNavigation = 'application' | 'author' | 'projects' | 'development'
export type SectionNavigation = { group: SectionKeyNavigation; links: string[] }

export type DomainPathNavigation<Domain extends string> = `/${Domain}`
export type PagePathNavigation<Domain extends string, Page extends string> = `/${Domain}/${Page}`
