// src/core/shared/libs/navigation/types.ts

export type RootRoutePath = '/'

export type SectionNavigationKey = 'application' | 'author' | 'projects' | 'development'
export type SectionsNavigation<T> = {
  section: SectionNavigationKey
  links: Array<RootRoutePath | T>
}
