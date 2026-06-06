import { countryNames, type CountryName } from "../names/common.js";

export type Gender = "male" | "female";

export const AVAILABLE_COUNTRIES = Object.keys(countryNames) as CountryName[];
export const AVAILABLE_GENDERS: readonly Gender[] = ["male", "female"];