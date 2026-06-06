import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Prague",
  "Brno",
  "Ostrava",
  "Plzeň",
  "Liberec",
  "Olomouc",
  "České Budějovice",
  "Hradec Králové",
  "Ústí nad Labem",
  "Pardubice",
  "Havířov",
  "Zlín",
  "Kladno",
  "Most",
  "Opava",
  "Frýdek-Místek",
  "Karviná",
  "Jihlava",
  "Teplice",
  "Děčín"
] as const satisfies CityList;
