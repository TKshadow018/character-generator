import type { CityList } from "../types.js";

export const CITY_NAMES = [
  "Stockholm",
  "Gothenburg",
  "Malmö",
  "Uppsala",
  "Linköping",
  "Örebro",
  "Västerås",
  "Helsingborg",
  "Norrköping",
  "Jönköping",
  "Umeå",
  "Lund",
  "Borås",
  "Eskilstuna",
  "Gävle",
  "Södertälje",
  "Karlstad",
  "Halmstad",
  "Växjö",
  "Sundsvall"
] as const satisfies CityList;
