// src/packages/@mzhvv/utils/types

/** Извлекает подмножество значений из строкового union-типа */
export type ExtractFromUnion<T extends string, U extends T> = Extract<T, U>
