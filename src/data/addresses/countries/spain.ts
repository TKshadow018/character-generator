import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Seville",
  "Zaragoza",
  "Málaga",
  "Murcia",
  "Palma",
  "Las Palmas",
  "Bilbao",
  "Alicante",
  "Córdoba",
  "Valladolid",
  "Vigo",
  "Gijón",
  "Hospitalet",
  "A Coruña",
  "Granada",
  "Vitoria-Gasteiz",
  "Elche"
] as const satisfies CityList;
