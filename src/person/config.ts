import { countryNames, countryGroupNames, type CountrySelection } from "../names/common.js";

export type Gender = "male" | "female";

export const AVAILABLE_COUNTRIES = [...Object.keys(countryNames) as CountrySelection[], ...countryGroupNames] as const;
export const AVAILABLE_GENDERS: readonly Gender[] = ["male", "female"];