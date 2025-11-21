// src/react-dev/__global__/types/utils/string.ts

export type CamelCase<T extends string> = T extends `${infer First}-${infer Rest}`
  ? `${First}${Capitalize<CamelCase<Rest>>}`
  : T

export type KebabCase<T> = T extends string
  ? T extends `${infer C0}${infer R}`
    ? `${C0 extends Uppercase<C0> ? '-' : ''}${Lowercase<C0>}${KebabCase<R>}`
    : T
  : never
