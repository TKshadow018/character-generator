import { CITY_NAMES as MYANMAR_CITIES } from "../countries/myanmar.js";
import { CITY_NAMES as COLOMBIA_CITIES } from "../countries/colombia.js";
import { CITY_NAMES as SUDAN_CITIES } from "../countries/sudan.js";
import { CITY_NAMES as UGANDA_CITIES } from "../countries/uganda.js";
import { CITY_NAMES as SOUTHKOREA_CITIES } from "../countries/south-korea.js";
import { CITY_NAMES as ALGERIA_CITIES } from "../countries/algeria.js";
import { CITY_NAMES as IRAQ_CITIES } from "../countries/iraq.js";
import { CITY_NAMES as SPAIN_CITIES } from "../countries/spain.js";
import { CITY_NAMES as ARGENTINA_CITIES } from "../countries/argentina.js";
import { CITY_NAMES as AFGHANISTAN_CITIES } from "../countries/afghanistan.js";
import { CITY_NAMES as YEMEN_CITIES } from "../countries/yemen.js";
import { CITY_NAMES as CANADA_CITIES } from "../countries/canada.js";
import { CITY_NAMES as ANGOLA_CITIES } from "../countries/angola.js";
import type { CountryName } from "../../../names/common.js";

export const REGION_03_CITIES = {
  Myanmar: MYANMAR_CITIES,
  Colombia: COLOMBIA_CITIES,
  Sudan: SUDAN_CITIES,
  Uganda: UGANDA_CITIES,
  SouthKorea: SOUTHKOREA_CITIES,
  Algeria: ALGERIA_CITIES,
  Iraq: IRAQ_CITIES,
  Spain: SPAIN_CITIES,
  Argentina: ARGENTINA_CITIES,
  Afghanistan: AFGHANISTAN_CITIES,
  Yemen: YEMEN_CITIES,
  Canada: CANADA_CITIES,
  Angola: ANGOLA_CITIES
} as const satisfies Partial<Record<CountryName, readonly string[]>>;
