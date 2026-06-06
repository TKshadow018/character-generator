import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Zurich",
  "Geneva",
  "Basel",
  "Lausanne",
  "Bern",
  "Winterthur",
  "Lucerne",
  "St. Gallen",
  "Lugano",
  "Biel",
  "Thun",
  "Köniz",
  "La Chaux-de-Fonds",
  "Schaffhausen",
  "Fribourg",
  "Vernier",
  "Chur",
  "Neuchâtel",
  "Bülach",
  "Uster"
] as const satisfies CityList;
