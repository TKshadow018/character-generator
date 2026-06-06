import { CITY_NAMES as INDIA_CITIES } from "../countries/india.js";
import { CITY_NAMES as CHINA_CITIES } from "../countries/china.js";
import { CITY_NAMES as UNITEDSTATES_CITIES } from "../countries/united-states.js";
import { CITY_NAMES as INDONESIA_CITIES } from "../countries/indonesia.js";
import { CITY_NAMES as PAKISTAN_CITIES } from "../countries/pakistan.js";
import { CITY_NAMES as NIGERIA_CITIES } from "../countries/nigeria.js";
import { CITY_NAMES as BRAZIL_CITIES } from "../countries/brazil.js";
import { CITY_NAMES as BANGLADESH_CITIES } from "../countries/bangladesh.js";
import { CITY_NAMES as RUSSIA_CITIES } from "../countries/russia.js";
import { CITY_NAMES as ETHIOPIA_CITIES } from "../countries/ethiopia.js";
import { CITY_NAMES as MEXICO_CITIES } from "../countries/mexico.js";
import { CITY_NAMES as JAPAN_CITIES } from "../countries/japan.js";
import { CITY_NAMES as EGYPT_CITIES } from "../countries/egypt.js";
import type { CountryName } from "../../../names/common.js";

export const REGION_01_CITIES = {
  India: INDIA_CITIES,
  China: CHINA_CITIES,
  UnitedStates: UNITEDSTATES_CITIES,
  Indonesia: INDONESIA_CITIES,
  Pakistan: PAKISTAN_CITIES,
  Nigeria: NIGERIA_CITIES,
  Brazil: BRAZIL_CITIES,
  Bangladesh: BANGLADESH_CITIES,
  Russia: RUSSIA_CITIES,
  Ethiopia: ETHIOPIA_CITIES,
  Mexico: MEXICO_CITIES,
  Japan: JAPAN_CITIES,
  Egypt: EGYPT_CITIES
} as const satisfies Partial<Record<CountryName, readonly string[]>>;
