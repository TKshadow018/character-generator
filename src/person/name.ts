import {
  allFemaleFirstNames,
  allFemaleLastNames,
  allMaleFirstNames,
  allMaleLastNames,
  countryNames,
  type CountryName
} from "../names/common.js";
import type { GeneratePersonOptions } from "./types.js";
import type { Gender } from "./config.js";
import { randomItem } from "./random.js";

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

export function resolvePersonName(options: GeneratePersonOptions, country: CountryName, gender: Gender): string {
  if (options.name) {
    return options.name;
  }

  const { firstNames, lastNames } = resolveNamePools(country, gender);
  const firstName = options.firstName ?? randomItem(firstNames);
  const lastName = options.lastName ?? randomItem(lastNames);

  return options.nameFormat === "lastFirst"
    ? `${lastName}, ${firstName}`
    : `${firstName} ${lastName}`;
}