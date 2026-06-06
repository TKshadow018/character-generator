import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Vienna",
  "Graz",
  "Linz",
  "Salzburg",
  "Innsbruck",
  "Klagenfurt",
  "Wels",
  "St. Pölten",
  "Wiener Neustadt",
  "Dornbirn",
  "Steyr",
  "Feldkirch",
  "Bregenz",
  "Leoben",
  "Traun",
  "Leonding",
  "Klosterneuburg",
  "Baden",
  "Wolfsberg",
  "Krems"
] as const satisfies CityList;
