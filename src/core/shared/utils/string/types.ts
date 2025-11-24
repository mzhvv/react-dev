// src/core/shared/utils/string/types.ts

// #region Cases

export type CamelCase<T extends string> = T extends `${infer First}-${infer Rest}`
  ? `${First}${Capitalize<CamelCase<Rest>>}`
  : T

export type PascalCase<T extends string> = T extends `${infer First}-${infer Rest}`
  ? `${Capitalize<First>}${Capitalize<PascalCase<Rest>>}`
  : Capitalize<T>

export type ConstCase<T extends string> = T extends `${infer First}${infer Rest}`
  ? Rest extends ''
    ? Uppercase<First>
    : `${First extends Uppercase<First> ? '_' : ''}${Uppercase<First>}${ConstCase<Rest>}`
  : T

export type KebabCase<T extends string> = T extends `${infer First}${infer Rest}`
  ? Rest extends ''
    ? Lowercase<First>
    : `${First extends Uppercase<First> ? '-' : ''}${Lowercase<First>}${KebabCase<Rest>}`
  : T

export interface StringCases {
  default: string
  camel: string
  pascal: string
  const: string
  kebab: string
}

// #endregion
