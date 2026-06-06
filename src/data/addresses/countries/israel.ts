import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Jerusalem",
  "Tel Aviv",
  "Haifa",
  "Rishon LeZion",
  "Petah Tikva",
  "Ashdod",
  "Be'er Sheva",
  "Netanya",
  "Holon",
  "Bnei Brak",
  "Ashkelon",
  "Bat Yam",
  "Rehovot",
  "Herzliya",
  "Hadera",
  "Ramat Gan",
  "Kfar Saba",
  "Modi'in-Maccabim-Re'ut",
  "Nazareth",
  "Ra'anana"
] as const satisfies CityList;
