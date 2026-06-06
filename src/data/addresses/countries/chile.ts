import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Santiago",
  "Valparaíso",
  "Concepción",
  "La Serena",
  "Antofagasta",
  "Temuco",
  "Rancagua",
  "Talca",
  "Arica",
  "Iquique",
  "Puerto Montt",
  "Coquimbo",
  "Valdivia",
  "Punta Arenas",
  "Los Ángeles",
  "Calama",
  "Copiapó",
  "Osorno",
  "Quilpué",
  "Viña del Mar"
] as const satisfies CityList;
