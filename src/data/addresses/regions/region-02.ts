import { CITY_NAMES as PHILIPPINES_CITIES } from "../countries/philippines.js";
import { CITY_NAMES as DRCONGO_CITIES } from "../countries/dr-congo.js";
import { CITY_NAMES as VIETNAM_CITIES } from "../countries/vietnam.js";
import { CITY_NAMES as IRAN_CITIES } from "../countries/iran.js";
import { CITY_NAMES as TURKEY_CITIES } from "../countries/turkey.js";
import { CITY_NAMES as GERMANY_CITIES } from "../countries/germany.js";
import { CITY_NAMES as TANZANIA_CITIES } from "../countries/tanzania.js";
import { CITY_NAMES as THAILAND_CITIES } from "../countries/thailand.js";
import { CITY_NAMES as UNITEDKINGDOM_CITIES } from "../countries/united-kingdom.js";
import { CITY_NAMES as FRANCE_CITIES } from "../countries/france.js";
import { CITY_NAMES as SOUTHAFRICA_CITIES } from "../countries/south-africa.js";
import { CITY_NAMES as ITALY_CITIES } from "../countries/italy.js";
import { CITY_NAMES as KENYA_CITIES } from "../countries/kenya.js";
import type { CountryName } from "../../../names/common.js";

export const REGION_02_CITIES = {
  Philippines: PHILIPPINES_CITIES,
  DRCongo: DRCONGO_CITIES,
  Vietnam: VIETNAM_CITIES,
  Iran: IRAN_CITIES,
  Turkey: TURKEY_CITIES,
  Germany: GERMANY_CITIES,
  Tanzania: TANZANIA_CITIES,
  Thailand: THAILAND_CITIES,
  UnitedKingdom: UNITEDKINGDOM_CITIES,
  France: FRANCE_CITIES,
  SouthAfrica: SOUTHAFRICA_CITIES,
  Italy: ITALY_CITIES,
  Kenya: KENYA_CITIES
} as const satisfies Partial<Record<CountryName, readonly string[]>>;
