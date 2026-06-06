import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Amsterdam",
  "Rotterdam",
  "The Hague",
  "Utrecht",
  "Eindhoven",
  "Tilburg",
  "Groningen",
  "Almere",
  "Breda",
  "Nijmegen",
  "Enschede",
  "Haarlem",
  "Arnhem",
  "Zaanstad",
  "Amersfoort",
  "Apeldoorn",
  "'s-Hertogenbosch",
  "Hoofddorp",
  "Maastricht",
  "Leiden"
] as const satisfies CityList;
