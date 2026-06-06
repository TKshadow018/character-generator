import { CITY_NAMES as UKRAINE_CITIES } from "../countries/ukraine.js";
import { CITY_NAMES as MOROCCO_CITIES } from "../countries/morocco.js";
import { CITY_NAMES as POLAND_CITIES } from "../countries/poland.js";
import { CITY_NAMES as UZBEKISTAN_CITIES } from "../countries/uzbekistan.js";
import { CITY_NAMES as MOZAMBIQUE_CITIES } from "../countries/mozambique.js";
import { CITY_NAMES as MALAYSIA_CITIES } from "../countries/malaysia.js";
import { CITY_NAMES as GHANA_CITIES } from "../countries/ghana.js";
import { CITY_NAMES as SAUDIARABIA_CITIES } from "../countries/saudi-arabia.js";
import { CITY_NAMES as PERU_CITIES } from "../countries/peru.js";
import { CITY_NAMES as MADAGASCAR_CITIES } from "../countries/madagascar.js";
import { CITY_NAMES as COTEDIVOIRE_CITIES } from "../countries/cote-d-ivoire.js";
import { CITY_NAMES as CAMEROON_CITIES } from "../countries/cameroon.js";
import { CITY_NAMES as NEPAL_CITIES } from "../countries/nepal.js";
import type { CountryName } from "../../../names/common.js";

export const REGION_04_CITIES = {
  Ukraine: UKRAINE_CITIES,
  Morocco: MOROCCO_CITIES,
  Poland: POLAND_CITIES,
  Uzbekistan: UZBEKISTAN_CITIES,
  Mozambique: MOZAMBIQUE_CITIES,
  Malaysia: MALAYSIA_CITIES,
  Ghana: GHANA_CITIES,
  SaudiArabia: SAUDIARABIA_CITIES,
  Peru: PERU_CITIES,
  Madagascar: MADAGASCAR_CITIES,
  CoteDIvoire: COTEDIVOIRE_CITIES,
  Cameroon: CAMEROON_CITIES,
  Nepal: NEPAL_CITIES
} as const satisfies Partial<Record<CountryName, readonly string[]>>;
