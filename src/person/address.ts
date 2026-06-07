import { countryCities } from "../data/addresses/index.js";
import type { CountryName } from "../names/common.js";
import { randomItem } from "./random.js";

export function generateCity(country: CountryName): string {
  return randomItem(countryCities[country]);
}

export function resolveCity(cityOption: string | readonly string[] | undefined, country: CountryName): string {
  if (typeof cityOption === "string") {
    return cityOption;
  }

  if (Array.isArray(cityOption)) {
    return randomItem(cityOption);
  }

  return generateCity(country);
}
