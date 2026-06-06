import {
  allFemaleFirstNames,
  allFemaleLastNames,
  allMaleFirstNames,
  allMaleLastNames,
  countryNames,
  type CountryName
} from "../names/common.js";
import type { Gender } from "./config.js";

export function resolveNamePools(country: CountryName | undefined, gender: Gender): {
  firstNames: readonly string[];
  lastNames: readonly string[];
} {
  if (!country) {
    return gender === "male"
      ? { firstNames: allMaleFirstNames, lastNames: allMaleLastNames }
      : { firstNames: allFemaleFirstNames, lastNames: allFemaleLastNames };
  }

  const names = countryNames[country];

  return gender === "male"
    ? { firstNames: names.maleFirstNames, lastNames: names.maleLastNames }
    : { firstNames: names.femaleFirstNames, lastNames: names.femaleLastNames };
}