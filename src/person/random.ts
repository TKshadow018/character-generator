export function randomItem<T>(items: readonly T[]): T {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

export function pickFromOption<T>(value: T | readonly T[] | undefined, fallback: readonly T[]): T {
  if (value === undefined) {
    return randomItem(fallback);
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      throw new RangeError("option arrays must not be empty");
    }

    return randomItem(value);
  }

  return value as T;
}