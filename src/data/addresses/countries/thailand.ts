import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Bangkok",
  "Nonthaburi",
  "Pak Kret",
  "Hat Yai",
  "Chiang Mai",
  "Udon Thani",
  "Pattaya",
  "Khon Kaen",
  "Ubon Ratchathani",
  "Nakhon Ratchasima",
  "Phitsanulok",
  "Surat Thani",
  "Chon Buri",
  "Nakhon Si Thammarat",
  "Lampang",
  "Rayong",
  "Chiang Rai",
  "Songkhla",
  "Nakhon Pathom",
  "Phuket"
] as const satisfies CityList;
