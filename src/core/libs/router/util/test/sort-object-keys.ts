// src/core/libs/router/util/test/sort-object-keys.ts

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sortObjectKeys = (obj: any): any => {
  if (Array.isArray(obj)) return obj.map(sortObjectKeys)
  if (obj && typeof obj === 'object') {
    return Object.keys(obj)
      .sort()
      .reduce((acc, key) => ({ ...acc, [key]: sortObjectKeys(obj[key]) }), {})
  }
  return obj
}
