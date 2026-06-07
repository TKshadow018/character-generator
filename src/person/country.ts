import type { CountryGroupName, CountryName, CountrySelection } from "../names/common.js";
import { randomItem } from "./random.js";

const COUNTRY_GROUPS: Record<CountryGroupName, readonly CountryName[]> = {
  Africa: [
    "Nigeria",
    "Ethiopia",
    "Tanzania",
    "SouthAfrica",
    "Kenya",
    "Sudan",
    "Uganda",
    "Algeria",
    "Morocco",
    "Ghana",
    "Mozambique",
    "CoteDIvoire",
    "Cameroon",
    "Niger",
    "Madagascar",
    "Malawi",
    "Zambia",
    "Chad",
    "Somalia",
    "Senegal",
    "Zimbabwe",
    "Guinea",
    "Benin",
    "Rwanda",
    "Burundi",
    "SouthSudan",
    "Tunisia",
    "Angola",
    "Egypt"
  ],
  Asia: [
    "India",
    "China",
    "Indonesia",
    "Pakistan",
    "Bangladesh",
    "Japan",
    "Philippines",
    "Vietnam",
    "Iran",
    "Turkey",
    "Myanmar",
    "SouthKorea",
    "NorthKorea",
    "Malaysia",
    "SaudiArabia",
    "Afghanistan",
    "Yemen",
    "Uzbekistan",
    "Kazakhstan",
    "SriLanka",
    "Taiwan",
    "Cambodia",
    "Tajikistan",
    "Jordan",
    "UAE",
    "Israel",
    "Oman",
    "Russia"
  ],
  Europe: [
    "Germany",
    "France",
    "Italy",
    "Spain",
    "UnitedKingdom",
    "Ireland",
    "Scotland",
    "England",
    "Wales",
    "Ukraine",
    "Poland",
    "Sweden",
    "Romania",
    "Netherlands",
    "CzechRepublic",
    "Azerbaijan",
    "Portugal",
    "Greece",
    "Hungary",
    "Austria",
    "Switzerland",
    "Belgium",
    "Turkey",
    "Russia"
  ],
  NorthAmerica: [
    "UnitedStates",
    "Canada",
    "Mexico",
    "Cuba",
    "DominicanRepublic",
    "Haiti",
    "Jamaica",
    "TrinidadAndTobago",
    "Honduras",
    "Guatemala"
  ],
  SouthAmerica: [
    "Brazil",
    "Colombia",
    "Argentina",
    "Venezuela",
    "Peru",
    "Chile",
    "Ecuador",
    "Bolivia"
  ],
  Oceania: ["Australia", "NewZealand", "PapuaNewGuinea"],
  Caribbean: ["Cuba", "DominicanRepublic", "Haiti", "Jamaica", "TrinidadAndTobago"],
  CentralAmerica: ["Honduras", "Guatemala"],
  MiddleEast: [
    "SaudiArabia",
    "UAE",
    "Israel",
    "Jordan",
    "Iraq",
    "Iran",
    "Yemen",
    "Turkey",
    "Egypt",
    "Oman"
  ],
  SouthAsia: ["India", "Pakistan", "Bangladesh", "SriLanka", "Nepal", "Afghanistan"],
  SoutheastAsia: [
    "Indonesia",
    "Philippines",
    "Malaysia",
    "Vietnam",
    "Thailand",
    "Cambodia",
    "Myanmar"
  ],
  EastAsia: ["China", "Japan", "SouthKorea", "NorthKorea", "Taiwan"],
  WestAfrica: [
    "Nigeria",
    "Ghana",
    "CoteDIvoire",
    "Senegal",
    "Benin",
    "Cameroon",
    "Niger",
    "Mali",
    "BurkinaFaso",
    "Guinea"
  ],
  EastAfrica: [
    "Ethiopia",
    "Tanzania",
    "Kenya",
    "Uganda",
    "Somalia",
    "Rwanda",
    "Burundi",
    "SouthSudan",
    "Sudan",
    "Madagascar",
    "Mozambique",
    "Malawi",
    "Zambia",
    "Zimbabwe"
  ],
  SouthernAfrica: [
    "SouthAfrica",
    "Angola",
    "Mozambique",
    "Madagascar",
    "Zambia",
    "Malawi",
    "Zimbabwe"
  ],
  NorthernAfrica: ["Egypt", "Morocco", "Tunisia", "Algeria", "Sudan"],
  WesternEurope: [
    "France",
    "Belgium",
    "Netherlands",
    "Germany",
    "Austria",
    "Switzerland",
    "Portugal",
    "UnitedKingdom",
    "Ireland"
  ],
  NorthernEurope: ["UnitedKingdom", "Ireland", "Sweden"],
  EasternEurope: [
    "Poland",
    "Ukraine",
    "Romania",
    "CzechRepublic",
    "Hungary",
    "Russia"
  ],
  SouthernEurope: ["Italy", "Spain", "Greece", "Portugal"],
  CentralAsia: ["Kazakhstan", "Uzbekistan", "Tajikistan"]
};

export function resolveCountryName(country: CountrySelection): CountryName {
  if (country === "UnitedKingdom") {
    return randomItem(["England", "Scotland", "Wales", "Ireland"]);
  }

  if (country === "WestIndies") {
    return randomItem(["Cuba", "DominicanRepublic", "Haiti", "Jamaica", "TrinidadAndTobago"]);
  }

  if (Object.prototype.hasOwnProperty.call(COUNTRY_GROUPS, country)) {
    return randomItem(COUNTRY_GROUPS[country as CountryGroupName]);
  }

  return country as CountryName;
}
