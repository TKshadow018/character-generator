import { REGION_01_CITIES } from "./regions/region-01.js";
import { REGION_02_CITIES } from "./regions/region-02.js";
import { REGION_03_CITIES } from "./regions/region-03.js";
import { REGION_04_CITIES } from "./regions/region-04.js";
import { REGION_05_CITIES } from "./regions/region-05.js";
import { REGION_06_CITIES } from "./regions/region-06.js";
import { REGION_07_CITIES } from "./regions/region-07.js";
import { REGION_08_CITIES } from "./regions/region-08.js";
import type { CountryName } from "../../names/common.js";

export const countryCities = {
  ...REGION_01_CITIES,
  ...REGION_02_CITIES,
  ...REGION_03_CITIES,
  ...REGION_04_CITIES,
  ...REGION_05_CITIES,
  ...REGION_06_CITIES,
  ...REGION_07_CITIES,
  ...REGION_08_CITIES
} as const satisfies Record<CountryName, readonly string[]>;
