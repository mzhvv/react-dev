// src/packages/@mzhvv/utils/string/types.ts

// #region 🧩 Cases

// CamelCase
export type AsCamelCase<T extends string> = T extends `${infer First}-${infer Rest}`
  ? `${First}${Capitalize<AsCamelCase<Rest>>}`
  : T

export type AsPascalCase<T extends string> = T extends `${infer First}-${infer Rest}`
  ? `${Capitalize<First>}${Capitalize<AsPascalCase<Rest>>}`
  : Capitalize<T>

export type AsConstCase<T extends string> = T extends `${infer First}${infer Rest}`
  ? Rest extends ''
    ? Uppercase<First>
    : `${First extends Uppercase<First> ? '_' : ''}${Uppercase<First>}${AsConstCase<Rest>}`
  : T

// KebabCase
/** Трансформатор (Преобразует ЛЮБУЮ строку в kebab-case) */
export type AsKebabCase<T extends string> = T extends `${infer First}${infer Rest}`
  ? Rest extends ''
    ? Lowercase<First>
    : `${First extends Uppercase<First> ? '-' : ''}${Lowercase<First>}${AsKebabCase<Rest>}`
  : T

// IsValidateKebabCase
type CheckingEmpty<T extends string> = T extends '' ? never : T
type CheckingLowercase<T extends string> = T extends Lowercase<T> ? T : never
type CheckingDash<T extends string> = T extends `-${string}` | `${string}-` | `${string}--${string}`
  ? never
  : T
/** Валидатор (Проверяет, что строка УЖЕ в правильном kebab-case) */
export type IsValidateKebabCase<T1 extends string> =
  CheckingEmpty<T1> extends infer T2
    ? T2 extends string
      ? CheckingLowercase<T2> extends infer T3
        ? T3 extends string
          ? CheckingDash<T3>
          : never
        : never
      : never
    : never
export type ValidateKebabCase<T extends IsValidateKebabCase<T>> = T
// export type ValidKebab<T extends string> = IsValidateKebabCase<T>

//

export interface StringCases {
  default: string
  camel: string
  pascal: string
  const: string
  kebab: string
}

// #endregion
