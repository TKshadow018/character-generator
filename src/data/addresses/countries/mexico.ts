import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Mexico City",
  "Ecatepec",
  "Guadalajara",
  "Puebla",
  "Ciudad Juárez",
  "Tijuana",
  "León",
  "Zapopan",
  "Monterrey",
  "Nezahualcóyotl",
  "Culiacán",
  "Mérida",
  "Naucalpan",
  "Chihuahua",
  "San Luis Potosí",
  "Aguascalientes",
  "Morelia",
  "Hermosillo",
  "Saltillo",
  "Tlalnepantla"
] as const satisfies CityList;
