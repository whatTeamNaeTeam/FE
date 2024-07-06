/* eslint-disable @typescript-eslint/no-explicit-any */

export type CamelCase<S extends string> =
  S extends `${infer First}_${infer Rest}`
    ? `${Lowercase<First>}${Capitalize<CamelCase<Rest>>}`
    : S

export type ConvertSnakeToCamel<T> =
  T extends Array<infer U>
    ? Array<ConvertSnakeToCamel<U>>
    : T extends object
      ? { [K in keyof T as CamelCase<string & K>]: ConvertSnakeToCamel<T[K]> }
      : T

export const convertSnakeToCamel = <T>(obj: T): ConvertSnakeToCamel<T> => {
  if (Array.isArray(obj)) {
    return obj.map((v) => convertSnakeToCamel(v)) as any
  }

  if (obj !== null && typeof obj === 'object') {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) =>
        letter.toUpperCase(),
      ) as keyof T

      return { ...acc, [camelKey]: convertSnakeToCamel(value) } as any
    }, {}) as any
  }

  return obj as any
}
