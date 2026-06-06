import { CITY_NAMES as SOMALIA_CITIES } from "../countries/somalia.js";
import { CITY_NAMES as CHILE_CITIES } from "../countries/chile.js";
import { CITY_NAMES as SENEGAL_CITIES } from "../countries/senegal.js";
import { CITY_NAMES as GUATEMALA_CITIES } from "../countries/guatemala.js";
import { CITY_NAMES as ROMANIA_CITIES } from "../countries/romania.js";
import { CITY_NAMES as NETHERLANDS_CITIES } from "../countries/netherlands.js";
import { CITY_NAMES as ECUADOR_CITIES } from "../countries/ecuador.js";
import { CITY_NAMES as CAMBODIA_CITIES } from "../countries/cambodia.js";
import { CITY_NAMES as ZIMBABWE_CITIES } from "../countries/zimbabwe.js";
import { CITY_NAMES as GUINEA_CITIES } from "../countries/guinea.js";
import { CITY_NAMES as BENIN_CITIES } from "../countries/benin.js";
import { CITY_NAMES as RWANDA_CITIES } from "../countries/rwanda.js";
import { CITY_NAMES as BURUNDI_CITIES } from "../countries/burundi.js";
import type { CountryName } from "../../../names/common.js";

export const REGION_06_CITIES = {
  Somalia: SOMALIA_CITIES,
  Chile: CHILE_CITIES,
  Senegal: SENEGAL_CITIES,
  Guatemala: GUATEMALA_CITIES,
  Romania: ROMANIA_CITIES,
  Netherlands: NETHERLANDS_CITIES,
  Ecuador: ECUADOR_CITIES,
  Cambodia: CAMBODIA_CITIES,
  Zimbabwe: ZIMBABWE_CITIES,
  Guinea: GUINEA_CITIES,
  Benin: BENIN_CITIES,
  Rwanda: RWANDA_CITIES,
  Burundi: BURUNDI_CITIES
} as const satisfies Partial<Record<CountryName, readonly string[]>>;
