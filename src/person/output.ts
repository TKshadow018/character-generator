import type { GeneratePersonOutputOptions } from "./types.js";

export function filterResultByOutput<T extends Record<string, unknown>>(
  result: T,
  output?: GeneratePersonOutputOptions["outputOption"]
): Partial<T> {
  if (!output) {
    return result;
  }

  const fields = Array.isArray(output) ? output : [output];
  return fields.reduce<Partial<T>>((selected, field) => {
    if (field in result) {
      selected[field as keyof T] = result[field as keyof T];
    }
    return selected;
  }, {});
}