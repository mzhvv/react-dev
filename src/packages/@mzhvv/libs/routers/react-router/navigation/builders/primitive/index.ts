// src/packages/@mzhvv/libs/routers/react-router/navigation/builders/primitive/index.ts

// #region createSectionObject

export type SectionObject<Id extends string, ConstKey extends string = Id> = {
  id: Id
  constKey?: ConstKey
}
function createSectionObject<Id extends string, ConstKey extends string = Id>(
  id: Id,
  constKey?: ConstKey
): SectionObject<Id, ConstKey> {
  return {
    id,
    constKey: (constKey ?? id) as ConstKey,
  } as const // satisfies NavigationSectionObject<Id, ConstKey>
}

// #endregion

// #region createLinkObject

export type LinkObject<
  RelativePath extends string,
  ConstKey extends string = RelativePath,
  AbsolutePath extends string = `/${RelativePath}`,
> = { relativePath: RelativePath; constKey: ConstKey; absolutePath: AbsolutePath }

function createLinkObject<Path extends string, ConstKey extends string = Path>(
  path: Path,
  constKey?: ConstKey
): LinkObject<Path, ConstKey> {
  return {
    relativePath: path,
    absolutePath: `/${path}`,
    constKey: (constKey ?? path) as ConstKey,
  } as const // satisfies LinkObject<Path, ConstKey>
}

// #endregion

// API
export const primitiveNavigationBuilders = {
  createSectionObject,
  createLinkObject,
}
