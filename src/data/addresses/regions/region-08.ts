import { CITY_NAMES as CZECHREPUBLIC_CITIES } from "../countries/czech-republic.js";
import { CITY_NAMES as AZERBAIJAN_CITIES } from "../countries/azerbaijan.js";
import { CITY_NAMES as PORTUGAL_CITIES } from "../countries/portugal.js";
import { CITY_NAMES as TOGO_CITIES } from "../countries/togo.js";
import { CITY_NAMES as GREECE_CITIES } from "../countries/greece.js";
import { CITY_NAMES as ISRAEL_CITIES } from "../countries/israel.js";
import { CITY_NAMES as HUNGARY_CITIES } from "../countries/hungary.js";
import { CITY_NAMES as AUSTRIA_CITIES } from "../countries/austria.js";
import { CITY_NAMES as SWITZERLAND_CITIES } from "../countries/switzerland.js";
import type { CountryName } from "../../../names/common.js";

export const REGION_08_CITIES = {
  CzechRepublic: CZECHREPUBLIC_CITIES,
  Azerbaijan: AZERBAIJAN_CITIES,
  Portugal: PORTUGAL_CITIES,
  Togo: TOGO_CITIES,
  Greece: GREECE_CITIES,
  Israel: ISRAEL_CITIES,
  Hungary: HUNGARY_CITIES,
  Austria: AUSTRIA_CITIES,
  Switzerland: SWITZERLAND_CITIES
} as const satisfies Partial<Record<CountryName, readonly string[]>>;
