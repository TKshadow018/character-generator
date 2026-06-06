import type { CountryName } from "../names/common.js";
import type { countryCurrencyCode } from "../data/countryCurrencyCode.js";
import { COUNTRY_SALARY_MULTIPLIERS, COUNTRY_CURRENCY_DATA } from "../data/salary.js";
import { JOB_PROFILES, type JobTitle } from "../data/professions.js";
import { randomNumber } from "../utils.js";

function getExchangeRate(currency: countryCurrencyCode): number | undefined {
  const currencyInfo = Object.values(COUNTRY_CURRENCY_DATA).find(
    (info) => info.code === currency
  );

  return currencyInfo?.usdExchangeRate;
}

export interface SalaryBounds {
  min?: number;
  max?: number;
}

export function randomSalary(
  job: JobTitle,
  country: CountryName,
  currency: countryCurrencyCode = "USD",
  bounds?: SalaryBounds
): number {
  const jobProfile = JOB_PROFILES.find((profile) => profile.title === job);

  if (!jobProfile) {
    throw new RangeError(`Unsupported job: ${job}`);
  }

  const multiplier = COUNTRY_SALARY_MULTIPLIERS[country] ?? 0.65;
  const salaryUsdMin = Math.round(jobProfile.minSalary * multiplier);
  const salaryUsdMax = Math.round(jobProfile.maxSalary * multiplier);
  const exchangeRate = currency === "USD" ? 1 : getExchangeRate(currency) ?? 1;

  if (bounds?.min !== undefined || bounds?.max !== undefined) {
    const targetMin = bounds.min ?? Math.round(salaryUsdMin * exchangeRate);
    const targetMax = bounds.max ?? Math.round(salaryUsdMax * exchangeRate);
    return randomNumber(targetMin, targetMax);
  }

  const salaryUsd = randomNumber(salaryUsdMin, salaryUsdMax);
  return Math.round(salaryUsd * exchangeRate);
}
