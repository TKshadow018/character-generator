import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Havana",
  "Santiago de Cuba",
  "Holguín",
  "Guantánamo",
  "Santa Clara",
  "Las Tunas",
  "Camagüey",
  "Bayamo",
  "Cienfuegos",
  "Pinar del Río",
  "Matanzas",
  "Ciego de Ávila",
  "Manzanillo",
  "Trinidad",
  "Sancti Spíritus",
  "Morón",
  "Nuevitas",
  "Palma Soriano",
  "Cárdenas",
  "Artemisa"
] as const satisfies CityList;
