const storage: Record<string, unknown> = {}

export const load = <T>(key: string, fallback: T): T => {
  const value = storage[key]

  if (value === undefined) {
    return clone(fallback)
  }

  return clone(value as T)
}

const clone = <T>(value: T): T => {
  return JSON.parse(JSON.stringify(value)) as T
}

export const save = <T>(key: string, value: T): void => {
  storage[key] = clone(value)
}

export const clear = (key: string) => {
  delete storage[key]
}
