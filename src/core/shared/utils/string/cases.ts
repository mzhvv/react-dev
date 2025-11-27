// src/core/shared/utils/string/cases.ts

import type { StringCases } from './types'

export function toCamelCase(string: string): string {
  return string
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''))
    .replace(/^[A-Z]/, first => first.toLowerCase())
}

export function toPascalCase(string: string): string {
  return string
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''))
    .replace(/^[a-z]/, first => first.toUpperCase())
}

export function toConstCase(string: string): string {
  return string
    .replace(/[-\s]+/g, '_')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .toUpperCase()
}

export function toKebabCase(string: string): string {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .toLowerCase()
}

export function stringCases(string: string) {
  return {
    default: string,
    camel: toCamelCase(string),
    pascal: toPascalCase(string),
    const: toConstCase(string),
    kebab: toKebabCase(string),
  } as const satisfies StringCases
}
