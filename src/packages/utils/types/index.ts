// src/core/shared/utils/types/index.ts

/** Извлекает подмножество значений из строкового union-типа */
export type FromUnion<T extends string, U extends T> = Extract<T, U>

export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never
