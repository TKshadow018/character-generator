import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Buenos Aires",
  "Córdoba",
  "Rosario",
  "Mendoza",
  "Tucumán",
  "La Plata",
  "Mar del Plata",
  "Salta",
  "Santa Fe",
  "San Juan",
  "Resistencia",
  "Santiago del Estero",
  "Corrientes",
  "Posadas",
  "Neuquén",
  "Bahía Blanca",
  "Paraná",
  "Formosa",
  "San Salvador de Jujuy",
  "Río Cuarto"
] as const satisfies CityList;
