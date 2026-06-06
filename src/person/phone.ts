import type { CountryName } from "../names/common.js";
import { COUNTRY_PHONE_DATA } from "../data/phone.js";
import { randomItem } from "./random.js";

function randomDigit(): string {
  return Math.floor(Math.random() * 10).toString();
}

function generateRandomNumber(length: number): string {
  return Array.from({ length }, () => randomDigit()).join("");
}

export function generatePhoneNumber(country: CountryName, operatorPrefix?: string): string {
  const phoneData = COUNTRY_PHONE_DATA[country];

  if (!phoneData) {
    throw new RangeError(`Unsupported country for phone generation: ${country}`);
  }

  if (operatorPrefix && /\D/.test(operatorPrefix)) {
    throw new RangeError(`Phone prefix must be numeric: ${operatorPrefix}`);
  }

  const chosenPrefix = operatorPrefix || randomItem(phoneData.operatorPrefixes);
  const numericPartLength = phoneData.pattern.replace(/[^X]/g, "").length;
  const remainingLength = Math.max(numericPartLength - chosenPrefix.length, 0);
  const generatedDigits = generateRandomNumber(remainingLength);

  return `${phoneData.countryCode} ${chosenPrefix}${generatedDigits}`;
}
