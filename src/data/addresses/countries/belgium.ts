import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Brussels",
  "Antwerp",
  "Ghent",
  "Liège",
  "Bruges",
  "Namur",
  "Leuven",
  "Mons",
  "Aalst",
  "Mechelen",
  "Ostend",
  "Sint-Niklaas",
  "Hasselt",
  "Genk",
  "Tournai",
  "Seraing",
  "La Louvière",
  "Kortrijk",
  "Mouscron",
  "Verviers"
] as const satisfies CityList;
