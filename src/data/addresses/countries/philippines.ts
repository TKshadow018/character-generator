import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Manila",
  "Quezon City",
  "Davao",
  "Caloocan",
  "Zamboanga",
  "Cebu City",
  "Antipolo",
  "Pasig",
  "Taguig",
  "Valenzuela",
  "Cagayan de Oro",
  "Parañaque",
  "Makati",
  "Las Piñas",
  "Bacoor",
  "General Santos",
  "Bacolod",
  "Marikina",
  "Muntinlupa",
  "Iloilo City"
] as const satisfies CityList;
