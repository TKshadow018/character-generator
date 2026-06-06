import { promises as fs } from "node:fs";
import path from "node:path";
import * as fakerPackage from "@faker-js/faker";

const SOURCE_NAME = "@faker-js/faker locale datasets";
const SOURCE_URL = "https://github.com/faker-js/faker";

const countryLocalePlan = {
  "afghanistan": { primary: "fakerFA", fallback: ["fakerAR", "fakerUR"], method: "regional-language" },
  "algeria": { primary: "fakerAR", fallback: ["fakerFR", "fakerFR_BE"], method: "regional-language" },
  "angola": { primary: "fakerPT_PT", fallback: ["fakerPT_BR", "fakerEN"], method: "regional-language" },
  "argentina": { primary: "fakerES", fallback: ["fakerES_MX", "fakerPT_BR"], method: "regional-language" },
  "australia": { primary: "fakerEN_AU", fallback: ["fakerEN_GB", "fakerEN"], method: "direct-country-locale" },
  "austria": { primary: "fakerDE_AT", fallback: ["fakerDE", "fakerDE_CH"], method: "direct-country-locale" },
  "azerbaijan": { primary: "fakerAZ", fallback: ["fakerTR", "fakerRU"], method: "direct-country-locale" },
  "bangladesh": { primary: "fakerBN_BD", fallback: ["fakerEN_IN", "fakerUR"], method: "direct-country-locale" },
  "belgium": { primary: "fakerFR_BE", fallback: ["fakerNL_BE", "fakerFR"], method: "direct-country-locale" },
  "benin": { primary: "fakerFR", fallback: ["fakerFR_SN", "fakerEN_GH"], method: "regional-language" },
  "bolivia": { primary: "fakerES", fallback: ["fakerES_MX", "fakerPT_BR"], method: "regional-language" },
  "brazil": { primary: "fakerPT_BR", fallback: ["fakerPT_PT", "fakerES"], method: "direct-country-locale" },
  "burkina-faso": { primary: "fakerFR", fallback: ["fakerFR_SN", "fakerEN_GH"], method: "regional-language" },
  "burundi": { primary: "fakerFR", fallback: ["fakerEN", "fakerEN_GH"], method: "regional-language" },
  "cambodia": { primary: "fakerTH", fallback: ["fakerVI", "fakerEN"], method: "regional-proxy" },
  "cameroon": { primary: "fakerFR", fallback: ["fakerEN", "fakerFR_SN"], method: "regional-language" },
  "canada": { primary: "fakerEN_CA", fallback: ["fakerFR_CA", "fakerEN_US"], method: "direct-country-locale" },
  "chad": { primary: "fakerFR", fallback: ["fakerAR", "fakerEN"], method: "regional-language" },
  "chile": { primary: "fakerES", fallback: ["fakerES_MX", "fakerPT_BR"], method: "regional-language" },
  "china": { primary: "fakerZH_CN", fallback: ["fakerZH_TW", "fakerJA"], method: "direct-country-locale" },
  "colombia": { primary: "fakerES", fallback: ["fakerES_MX", "fakerPT_BR"], method: "regional-language" },
  "cote-d-ivoire": { primary: "fakerFR", fallback: ["fakerFR_SN", "fakerEN_GH"], method: "regional-language" },
  "cuba": { primary: "fakerES", fallback: ["fakerES_MX", "fakerEN_US"], method: "regional-language" },
  "czech-republic": { primary: "fakerCS_CZ", fallback: ["fakerSK", "fakerPL"], method: "direct-country-locale" },
  "dominican-republic": { primary: "fakerES", fallback: ["fakerES_MX", "fakerEN_US"], method: "regional-language" },
  "dr-congo": { primary: "fakerFR", fallback: ["fakerEN", "fakerFR_SN"], method: "regional-language" },
  "ecuador": { primary: "fakerES", fallback: ["fakerES_MX", "fakerPT_BR"], method: "regional-language" },
  "egypt": { primary: "fakerAR", fallback: ["fakerFA", "fakerTR"], method: "regional-language" },
  "england": { primary: "fakerEN_GB", fallback: ["fakerEN_IE", "fakerEN"], method: "regional-proxy" },
  "ethiopia": { primary: "fakerEN", fallback: ["fakerAR", "fakerEN_GH"], method: "regional-proxy" },
  "france": { primary: "fakerFR", fallback: ["fakerFR_BE", "fakerFR_CH"], method: "direct-country-locale" },
  "germany": { primary: "fakerDE", fallback: ["fakerDE_AT", "fakerDE_CH"], method: "direct-country-locale" },
  "ghana": { primary: "fakerEN_GH", fallback: ["fakerYO_NG", "fakerEN"], method: "direct-country-locale" },
  "greece": { primary: "fakerEL", fallback: ["fakerIT", "fakerEN"], method: "direct-country-locale" },
  "guatemala": { primary: "fakerES", fallback: ["fakerES_MX", "fakerEN_US"], method: "regional-language" },
  "guinea": { primary: "fakerFR", fallback: ["fakerFR_SN", "fakerEN"], method: "regional-language" },
  "haiti": { primary: "fakerFR", fallback: ["fakerEN_US", "fakerES"], method: "regional-proxy" },
  "honduras": { primary: "fakerES", fallback: ["fakerES_MX", "fakerEN_US"], method: "regional-language" },
  "hungary": { primary: "fakerHU", fallback: ["fakerRO", "fakerDE"], method: "direct-country-locale" },
  "india": { primary: "fakerEN_IN", fallback: ["fakerTA_IN", "fakerUR"], method: "direct-country-locale" },
  "indonesia": { primary: "fakerID_ID", fallback: ["fakerEN", "fakerVI"], method: "direct-country-locale" },
  "iran": { primary: "fakerFA", fallback: ["fakerAR", "fakerTR"], method: "direct-country-locale" },
  "iraq": { primary: "fakerAR", fallback: ["fakerFA", "fakerTR"], method: "regional-language" },
  "ireland": { primary: "fakerEN_IE", fallback: ["fakerEN_GB", "fakerEN"], method: "direct-country-locale" },
  "israel": { primary: "fakerHE", fallback: ["fakerAR", "fakerEN"], method: "direct-country-locale" },
  "italy": { primary: "fakerIT", fallback: ["fakerFR", "fakerDE_CH"], method: "direct-country-locale" },
  "japan": { primary: "fakerJA", fallback: ["fakerZH_CN", "fakerKO"], method: "direct-country-locale" },
  "jordan": { primary: "fakerAR", fallback: ["fakerHE", "fakerFA"], method: "regional-language" },
  "kazakhstan": { primary: "fakerRU", fallback: ["fakerUZ_UZ_latin", "fakerTR"], method: "regional-proxy" },
  "kenya": { primary: "fakerEN_GH", fallback: ["fakerEN", "fakerYO_NG"], method: "regional-proxy" },
  "madagascar": { primary: "fakerFR", fallback: ["fakerEN", "fakerPT_PT"], method: "regional-proxy" },
  "malawi": { primary: "fakerEN", fallback: ["fakerEN_GH", "fakerEN_ZA"], method: "regional-proxy" },
  "malaysia": { primary: "fakerEN", fallback: ["fakerID_ID", "fakerZH_CN"], method: "regional-proxy" },
  "mali": { primary: "fakerFR", fallback: ["fakerFR_SN", "fakerAR"], method: "regional-language" },
  "mexico": { primary: "fakerES_MX", fallback: ["fakerES", "fakerEN_US"], method: "direct-country-locale" },
  "morocco": { primary: "fakerAR", fallback: ["fakerFR", "fakerES"], method: "regional-language" },
  "mozambique": { primary: "fakerPT_PT", fallback: ["fakerPT_BR", "fakerEN"], method: "regional-language" },
  "myanmar": { primary: "fakerTH", fallback: ["fakerEN", "fakerVI"], method: "regional-proxy" },
  "namibia": { primary: "fakerEN_ZA", fallback: ["fakerAF_ZA", "fakerDE"], method: "regional-proxy" },
  "nepal": { primary: "fakerNE", fallback: ["fakerEN_IN", "fakerTA_IN"], method: "direct-country-locale" },
  "netherlands": { primary: "fakerNL", fallback: ["fakerNL_BE", "fakerDE"], method: "direct-country-locale" },
  "new-zealand": { primary: "fakerEN_AU", fallback: ["fakerEN_GB", "fakerEN"], method: "regional-proxy" },
  "niger": { primary: "fakerFR", fallback: ["fakerAR", "fakerEN"], method: "regional-language" },
  "nigeria": { primary: "fakerEN_NG", fallback: ["fakerYO_NG", "fakerEN"], method: "direct-country-locale" },
  "north-korea": { primary: "fakerKO", fallback: ["fakerZH_CN", "fakerJA"], method: "regional-proxy" },
  "oman": { primary: "fakerAR", fallback: ["fakerFA", "fakerUR"], method: "regional-language" },
  "pakistan": { primary: "fakerUR", fallback: ["fakerEN_IN", "fakerAR"], method: "direct-country-locale" },
  "papua-new-guinea": { primary: "fakerEN_AU", fallback: ["fakerEN", "fakerEN_US"], method: "regional-proxy" },
  "peru": { primary: "fakerES", fallback: ["fakerES_MX", "fakerPT_BR"], method: "regional-language" },
  "philippines": { primary: "fakerEN", fallback: ["fakerES", "fakerEN_US"], method: "regional-proxy" },
  "poland": { primary: "fakerPL", fallback: ["fakerSK", "fakerDE"], method: "direct-country-locale" },
  "portugal": { primary: "fakerPT_PT", fallback: ["fakerPT_BR", "fakerES"], method: "direct-country-locale" },
  "romania": { primary: "fakerRO", fallback: ["fakerRO_MD", "fakerHU"], method: "direct-country-locale" },
  "russia": { primary: "fakerRU", fallback: ["fakerUK", "fakerPL"], method: "direct-country-locale" },
  "rwanda": { primary: "fakerEN", fallback: ["fakerFR", "fakerEN_GH"], method: "regional-proxy" },
  "saudi-arabia": { primary: "fakerAR", fallback: ["fakerFA", "fakerUR"], method: "regional-language" },
  "scotland": { primary: "fakerEN_GB", fallback: ["fakerEN_IE", "fakerEN"], method: "regional-proxy" },
  "senegal": { primary: "fakerFR_SN", fallback: ["fakerFR", "fakerEN_GH"], method: "direct-country-locale" },
  "somalia": { primary: "fakerAR", fallback: ["fakerEN", "fakerFA"], method: "regional-proxy" },
  "south-africa": { primary: "fakerEN_ZA", fallback: ["fakerZU_ZA", "fakerAF_ZA"], method: "direct-country-locale" },
  "south-korea": { primary: "fakerKO", fallback: ["fakerJA", "fakerZH_CN"], method: "direct-country-locale" },
  "south-sudan": { primary: "fakerEN", fallback: ["fakerAR", "fakerEN_GH"], method: "regional-proxy" },
  "spain": { primary: "fakerES", fallback: ["fakerES_MX", "fakerPT_PT"], method: "direct-country-locale" },
  "sri-lanka": { primary: "fakerEN_IN", fallback: ["fakerTA_IN", "fakerEN"], method: "regional-proxy" },
  "sudan": { primary: "fakerAR", fallback: ["fakerEN", "fakerFA"], method: "regional-language" },
  "sweden": { primary: "fakerSV", fallback: ["fakerNB_NO", "fakerFI"], method: "direct-country-locale" },
  "switzerland": { primary: "fakerDE_CH", fallback: ["fakerFR_CH", "fakerIT"], method: "direct-country-locale" },
  "syria": { primary: "fakerAR", fallback: ["fakerFA", "fakerTR"], method: "regional-language" },
  "taiwan": { primary: "fakerZH_TW", fallback: ["fakerZH_CN", "fakerJA"], method: "direct-country-locale" },
  "tajikistan": { primary: "fakerRU", fallback: ["fakerUZ_UZ_latin", "fakerFA"], method: "regional-proxy" },
  "tanzania": { primary: "fakerEN", fallback: ["fakerEN_GH", "fakerEN_ZA"], method: "regional-proxy" },
  "thailand": { primary: "fakerTH", fallback: ["fakerVI", "fakerEN"], method: "direct-country-locale" },
  "togo": { primary: "fakerFR", fallback: ["fakerFR_SN", "fakerEN_GH"], method: "regional-language" },
  "tunisia": { primary: "fakerAR", fallback: ["fakerFR", "fakerIT"], method: "regional-language" },
  "turkey": { primary: "fakerTR", fallback: ["fakerAZ", "fakerAR"], method: "direct-country-locale" },
  "uae": { primary: "fakerAR", fallback: ["fakerFA", "fakerUR"], method: "regional-language" },
  "uganda": { primary: "fakerEN", fallback: ["fakerEN_GH", "fakerEN_ZA"], method: "regional-proxy" },
  "ukraine": { primary: "fakerUK", fallback: ["fakerRU", "fakerPL"], method: "direct-country-locale" },
  "united-kingdom": { primary: "fakerEN_GB", fallback: ["fakerEN_IE", "fakerEN"], method: "direct-country-locale" },
  "united-states": { primary: "fakerEN_US", fallback: ["fakerEN", "fakerEN_CA"], method: "direct-country-locale" },
  "uzbekistan": { primary: "fakerUZ_UZ_latin", fallback: ["fakerRU", "fakerTR"], method: "direct-country-locale" },
  "venezuela": { primary: "fakerES", fallback: ["fakerES_MX", "fakerPT_BR"], method: "regional-language" },
  "vietnam": { primary: "fakerVI", fallback: ["fakerTH", "fakerZH_CN"], method: "direct-country-locale" },
  "west-indies": { primary: "fakerEN", fallback: ["fakerEN_GH", "fakerEN_US"], method: "regional-proxy" },
  "yemen": { primary: "fakerAR", fallback: ["fakerFA", "fakerUR"], method: "regional-language" },
  "zambia": { primary: "fakerEN", fallback: ["fakerEN_GH", "fakerEN_ZA"], method: "regional-proxy" },
  "zimbabwe": { primary: "fakerEN_ZA", fallback: ["fakerEN_GH", "fakerEN"], method: "regional-proxy" }
};

const scoreByMethod = {
  "direct-country-locale": 0.9,
  "regional-language": 0.78,
  "regional-proxy": 0.64,
  "global-fallback": 0.5
};

const countryFileToKey = (fileName) =>
  fileName
    .replace(/\.ts$/, "")
    .split("-")
    .map((part, index) => {
      if (index === 0) {
        return part.toLowerCase() === "dr" ? "DR" : part.charAt(0).toUpperCase() + part.slice(1);
      }
      if (part.toLowerCase() === "d") {
        return "D";
      }
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("")
    .replace("Ivoire", "DIvoire")
    .replace("Uae", "UAE")
    .replace("DrCongo", "DRCongo");

const hash = (input) => {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

const uniqueNames = ({ fakers, generator, target, seed, normalize = (v) => v }) => {
  const set = new Set();
  let pass = 0;

  while (set.size < target && pass < 20000) {
    const fakerIndex = pass % fakers.length;
    const localFaker = fakers[fakerIndex];
    localFaker.seed((hash(`${seed}:${pass}`) % 1000000) + 1);

    const raw = generator(localFaker);
    const normalized = normalize(String(raw || "").trim().replace(/\s+/g, " "));

    if (normalized.length > 1 && !/[^\p{L}\p{M}\p{N} .'-]/u.test(normalized)) {
      set.add(normalized);
    }

    pass += 1;
  }

  if (set.size < target) {
    throw new Error(`Failed collecting ${target} names for seed ${seed}. Got ${set.size}.`);
  }

  return Array.from(set).sort((a, b) => a.localeCompare(b));
};

const getFaker = (exportName) => fakerPackage[exportName] ?? fakerPackage.fakerEN;

const countriesDir = path.join(process.cwd(), "src", "names", "countries");
const confidenceFilePath = path.join(process.cwd(), "src", "names", "datasetConfidence.ts");
const fileNames = (await fs.readdir(countriesDir)).filter((name) => name.endsWith(".ts")).sort();

const confidenceEntries = [];

for (const fileName of fileNames) {
  const stem = fileName.replace(/\.ts$/, "");
  const plan = countryLocalePlan[stem] ?? { primary: "fakerEN", fallback: ["fakerEN_US"], method: "global-fallback" };
  const localeExports = [plan.primary, ...plan.fallback].filter(Boolean);
  const fakers = localeExports.map((localeExport) => getFaker(localeExport));

  const maleFirstNames = uniqueNames({
    fakers,
    target: 60,
    seed: `${stem}:maleFirst`,
    generator: (localFaker) => localFaker.person.firstName("male")
  });

  const femaleFirstNames = uniqueNames({
    fakers,
    target: 60,
    seed: `${stem}:femaleFirst`,
    generator: (localFaker) => localFaker.person.firstName("female")
  });

  const maleLastNames = uniqueNames({
    fakers,
    target: 40,
    seed: `${stem}:maleLast`,
    generator: (localFaker) => localFaker.person.lastName()
  });

  const femaleLastNames = uniqueNames({
    fakers,
    target: 40,
    seed: `${stem}:femaleLast`,
    generator: (localFaker) => localFaker.person.lastName()
  });

  const fileContent = [
    `export const maleFirstNames = ${JSON.stringify(maleFirstNames, null, 2)} as const;`,
    "",
    `export const femaleFirstNames = ${JSON.stringify(femaleFirstNames, null, 2)} as const;`,
    "",
    `export const maleLastNames = ${JSON.stringify(maleLastNames, null, 2)} as const;`,
    "",
    `export const femaleLastNames = ${JSON.stringify(femaleLastNames, null, 2)} as const;`,
    ""
  ].join("\n");

  await fs.writeFile(path.join(countriesDir, fileName), fileContent, "utf8");

  const countryKey = countryFileToKey(fileName);
  const confidenceScore = scoreByMethod[plan.method] ?? scoreByMethod["global-fallback"];

  confidenceEntries.push({
    countryKey,
    countryFile: `${stem}.ts`,
    dataPoints: {
      maleFirstNames: maleFirstNames.length,
      femaleFirstNames: femaleFirstNames.length,
      maleLastNames: maleLastNames.length,
      femaleLastNames: femaleLastNames.length,
      total: maleFirstNames.length + femaleFirstNames.length + maleLastNames.length + femaleLastNames.length
    },
    confidence: {
      score: confidenceScore,
      method: plan.method,
      notes: `${plan.method === "direct-country-locale" ? "Country-specific locale available." : "Used closest open locale proxy/fallback."}`
    },
    sources: {
      name: SOURCE_NAME,
      url: SOURCE_URL,
      localeExports
    }
  });
}

const confidenceContent = [
  "export interface CountryDatasetConfidence {",
  "  countryFile: string;",
  "  dataPoints: {",
  "    maleFirstNames: number;",
  "    femaleFirstNames: number;",
  "    maleLastNames: number;",
  "    femaleLastNames: number;",
  "    total: number;",
  "  };",
  "  confidence: {",
  "    score: number;",
  "    method: string;",
  "    notes: string;",
  "  };",
  "  sources: {",
  "    name: string;",
  "    url: string;",
  "    localeExports: string[];",
  "  };",
  "}",
  "",
  "export const countryDatasetConfidence: Record<string, CountryDatasetConfidence> = " + JSON.stringify(
    Object.fromEntries(confidenceEntries.map((entry) => [entry.countryKey, {
      countryFile: entry.countryFile,
      dataPoints: entry.dataPoints,
      confidence: entry.confidence,
      sources: entry.sources
    }]))
  , null, 2) + " as const;",
  ""
].join("\n");

await fs.writeFile(confidenceFilePath, confidenceContent, "utf8");

console.log(`Generated realistic datasets for ${fileNames.length} countries.`);
