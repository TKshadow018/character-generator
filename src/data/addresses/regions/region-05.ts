import { CITY_NAMES as NIGER_CITIES } from "../countries/niger.js";
import { CITY_NAMES as VENEZUELA_CITIES } from "../countries/venezuela.js";
import { CITY_NAMES as AUSTRALIA_CITIES } from "../countries/australia.js";
import { CITY_NAMES as NORTHKOREA_CITIES } from "../countries/north-korea.js";
import { CITY_NAMES as SYRIA_CITIES } from "../countries/syria.js";
import { CITY_NAMES as MALI_CITIES } from "../countries/mali.js";
import { CITY_NAMES as BURKINAFASO_CITIES } from "../countries/burkina-faso.js";
import { CITY_NAMES as SRILANKA_CITIES } from "../countries/sri-lanka.js";
import { CITY_NAMES as TAIWAN_CITIES } from "../countries/taiwan.js";
import { CITY_NAMES as MALAWI_CITIES } from "../countries/malawi.js";
import { CITY_NAMES as ZAMBIA_CITIES } from "../countries/zambia.js";
import { CITY_NAMES as CHAD_CITIES } from "../countries/chad.js";
import { CITY_NAMES as KAZAKHSTAN_CITIES } from "../countries/kazakhstan.js";
import { CITY_NAMES as NEWZEALAND_CITIES } from "../countries/new-zealand.js";
import type { CountryName } from "../../../names/common.js";

export const REGION_05_CITIES = {
  Niger: NIGER_CITIES,
  Venezuela: VENEZUELA_CITIES,
  Australia: AUSTRALIA_CITIES,
  NorthKorea: NORTHKOREA_CITIES,
  Syria: SYRIA_CITIES,
  Mali: MALI_CITIES,
  BurkinaFaso: BURKINAFASO_CITIES,
  SriLanka: SRILANKA_CITIES,
  Taiwan: TAIWAN_CITIES,
  Malawi: MALAWI_CITIES,
  Zambia: ZAMBIA_CITIES,
  Chad: CHAD_CITIES,
  Kazakhstan: KAZAKHSTAN_CITIES,
  NewZealand: NEWZEALAND_CITIES
} as const satisfies Partial<Record<CountryName, readonly string[]>>;
