import { countryCities } from "../data/addresses/index.js";
import type { CountryName } from "../names/common.js";
import { randomItem } from "./random.js";

export function generateCity(country: CountryName): string {
  return randomItem(countryCities[country]);
}
