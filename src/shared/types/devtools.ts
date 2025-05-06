// src/shared/types/devtools.ts

/* eslint-disable @typescript-eslint/no-explicit-any */

export type ExpandDeep<T> = T extends object
  ? T extends (...args: any[]) => any
    ? T
    : { [K in keyof T]: ExpandDeep<T[K]> }
  : T

export type DeepWritable<T> = {
  -readonly [K in keyof T]: T[K] extends object
    ? T[K] extends (...args: any[]) => any
      ? T[K]
      : DeepWritable<T[K]>
    : T[K]
}
