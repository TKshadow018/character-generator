import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Ho Chi Minh City",
  "Hanoi",
  "Hai Phong",
  "Da Nang",
  "Can Tho",
  "Bien Hoa",
  "Hue",
  "Nha Trang",
  "Buon Ma Thuot",
  "Quy Nhon",
  "Vung Tau",
  "Nam Dinh",
  "Thu Duc",
  "Vinh",
  "Thai Nguyen",
  "Da Lat",
  "Long Xuyen",
  "Rach Gia",
  "Thanh Hoa",
  "Ha Long"
] as const satisfies CityList;
