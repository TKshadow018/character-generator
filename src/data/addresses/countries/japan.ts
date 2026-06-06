import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Tokyo",
  "Yokohama",
  "Osaka",
  "Nagoya",
  "Sapporo",
  "Fukuoka",
  "Kobe",
  "Kyoto",
  "Kawasaki",
  "Saitama",
  "Hiroshima",
  "Sendai",
  "Kitakyushu",
  "Chiba",
  "Sakai",
  "Niigata",
  "Hamamatsu",
  "Sagamihara",
  "Okayama",
  "Kumamoto"
] as const satisfies CityList;
