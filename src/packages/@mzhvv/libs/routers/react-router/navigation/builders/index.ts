// src/packages/@mzhvv/libs/routers/react-router/navigation/builders/index.ts

//

type NavigationSectionObject<ID extends string, ConstKey extends string = ID> = {
  id: ID
  constKey?: ConstKey
}
function createNavigationSectionObject<ID extends string, ConstKey extends string = ID>({
  id,
  constKey,
}: NavigationSectionObject<ID, ConstKey>) {
  return {
    id,
    constKey: (constKey ?? id) as ConstKey,
  }
}

//

export type NavigationLinkObject<
  RelativePath extends string,
  ConstKey extends string = RelativePath,
  AbsolutePath extends string = `/${RelativePath}`,
> = { relativePath: RelativePath; constKey: ConstKey; absolutePath: AbsolutePath }

export function createNavigationDomainLinkObject<
  Path extends string,
  ConstKey extends string = Path,
>(path: Path, constKey?: ConstKey) {
  return {
    relativePath: path,
    absolutePath: `/${path}`,
    constKey: (constKey ?? path) as ConstKey,
  } as const satisfies NavigationLinkObject<Path, ConstKey>
}

//

type NavigationSection<
  Section extends string,
  Path extends string,
  SectionConstKey extends string = Section,
  PathConstKey extends string = Path,
> = {
  section: NavigationSectionObject<Section, SectionConstKey>
  links: NavigationLinkObject<Path, PathConstKey>[]
}
export function createNavigationSection<
  Section extends string,
  Path extends string = string,
  SectionConstKey extends string = Section,
  PathConstKey extends string = Path,
>({ section, links }: NavigationSection<Section, Path, SectionConstKey, PathConstKey>) {
  return {
    section: createNavigationSectionObject<Section, SectionConstKey>(section),
    links,
  } as const satisfies NavigationSection<Section, Path, SectionConstKey, PathConstKey>
}
