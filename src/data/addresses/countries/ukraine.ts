import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Kyiv",
  "Kharkiv",
  "Odessa",
  "Dnipro",
  "Donetsk",
  "Zaporizhzhia",
  "Lviv",
  "Mykolaiv",
  "Mariupol",
  "Luhansk",
  "Vinnytsia",
  "Simferopol",
  "Kherson",
  "Poltava",
  "Chernihiv",
  "Cherkasy",
  "Sumy",
  "Zhytomyr",
  "Ivano-Frankivsk",
  "Khmelnytskyi"
] as const satisfies CityList;
