const storage: Record<string, unknown> = {}

export const load = <T>(key: string, fallback: T): T => {
  const value = storage[key]

  if (value === undefined) {
    return fallback
  }

  return value as T
}

export const save = <T>(key: string, value: T): void => {
  storage[key] = value
}

export const clear = (key: string) => {
  delete storage[key]
}
