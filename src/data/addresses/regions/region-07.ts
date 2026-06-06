import { CITY_NAMES as BOLIVIA_CITIES } from "../countries/bolivia.js";
import { CITY_NAMES as SOUTHSUDAN_CITIES } from "../countries/south-sudan.js";
import { CITY_NAMES as TUNISIA_CITIES } from "../countries/tunisia.js";
import { CITY_NAMES as HAITI_CITIES } from "../countries/haiti.js";
import { CITY_NAMES as BELGIUM_CITIES } from "../countries/belgium.js";
import { CITY_NAMES as DOMINICANREPUBLIC_CITIES } from "../countries/dominican-republic.js";
import { CITY_NAMES as JORDAN_CITIES } from "../countries/jordan.js";
import { CITY_NAMES as UAE_CITIES } from "../countries/uae.js";
import { CITY_NAMES as HONDURAS_CITIES } from "../countries/honduras.js";
import { CITY_NAMES as TAJIKISTAN_CITIES } from "../countries/tajikistan.js";
import { CITY_NAMES as PAPUANEWGUINEA_CITIES } from "../countries/papua-new-guinea.js";
import { CITY_NAMES as CUBA_CITIES } from "../countries/cuba.js";
import { CITY_NAMES as SWEDEN_CITIES } from "../countries/sweden.js";
import type { CountryName } from "../../../names/common.js";

export const REGION_07_CITIES = {
  Bolivia: BOLIVIA_CITIES,
  SouthSudan: SOUTHSUDAN_CITIES,
  Tunisia: TUNISIA_CITIES,
  Haiti: HAITI_CITIES,
  Belgium: BELGIUM_CITIES,
  DominicanRepublic: DOMINICANREPUBLIC_CITIES,
  Jordan: JORDAN_CITIES,
  UAE: UAE_CITIES,
  Honduras: HONDURAS_CITIES,
  Tajikistan: TAJIKISTAN_CITIES,
  PapuaNewGuinea: PAPUANEWGUINEA_CITIES,
  Cuba: CUBA_CITIES,
  Sweden: SWEDEN_CITIES
} as const satisfies Partial<Record<CountryName, readonly string[]>>;
