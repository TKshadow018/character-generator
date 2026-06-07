export interface CountryDatasetConfidence {
  countryFile: string;
  dataPoints: {
    maleFirstNames: number;
    femaleFirstNames: number;
    maleLastNames: number;
    femaleLastNames: number;
    total: number;
  };
  confidence: {
    score: number;
    method: string;
    notes: string;
  };
  sources: {
    name: string;
    url: string;
    localeExports: string[];
  };
}

export const countryDatasetConfidence: Record<string, CountryDatasetConfidence> = {
  "Afghanistan": {
    "countryFile": "afghanistan.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFA",
        "fakerAR",
        "fakerUR"
      ]
    }
  },
  "Algeria": {
    "countryFile": "algeria.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerAR",
        "fakerFR",
        "fakerFR_BE"
      ]
    }
  },
  "Angola": {
    "countryFile": "angola.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerPT_PT",
        "fakerPT_BR",
        "fakerEN"
      ]
    }
  },
  "Argentina": {
    "countryFile": "argentina.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerES",
        "fakerES_MX",
        "fakerPT_BR"
      ]
    }
  },
  "Australia": {
    "countryFile": "australia.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_AU",
        "fakerEN_GB",
        "fakerEN"
      ]
    }
  },
  "Austria": {
    "countryFile": "austria.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerDE_AT",
        "fakerDE",
        "fakerDE_CH"
      ]
    }
  },
  "Azerbaijan": {
    "countryFile": "azerbaijan.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerAZ",
        "fakerTR",
        "fakerRU"
      ]
    }
  },
  "Bangladesh": {
    "countryFile": "bangladesh.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerBN_BD",
        "fakerEN_IN",
        "fakerUR"
      ]
    }
  },
  "Belgium": {
    "countryFile": "belgium.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR_BE",
        "fakerNL_BE",
        "fakerFR"
      ]
    }
  },
  "Benin": {
    "countryFile": "benin.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR",
        "fakerFR_SN",
        "fakerEN_GH"
      ]
    }
  },
  "Bolivia": {
    "countryFile": "bolivia.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerES",
        "fakerES_MX",
        "fakerPT_BR"
      ]
    }
  },
  "Brazil": {
    "countryFile": "brazil.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerPT_BR",
        "fakerPT_PT",
        "fakerES"
      ]
    }
  },
  "BurkinaFaso": {
    "countryFile": "burkina-faso.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR",
        "fakerFR_SN",
        "fakerEN_GH"
      ]
    }
  },
  "Burundi": {
    "countryFile": "burundi.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR",
        "fakerEN",
        "fakerEN_GH"
      ]
    }
  },
  "Cambodia": {
    "countryFile": "cambodia.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerTH",
        "fakerVI",
        "fakerEN"
      ]
    }
  },
  "Cameroon": {
    "countryFile": "cameroon.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR",
        "fakerEN",
        "fakerFR_SN"
      ]
    }
  },
  "Canada": {
    "countryFile": "canada.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_CA",
        "fakerFR_CA",
        "fakerEN_US"
      ]
    }
  },
  "Chad": {
    "countryFile": "chad.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR",
        "fakerAR",
        "fakerEN"
      ]
    }
  },
  "Chile": {
    "countryFile": "chile.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerES",
        "fakerES_MX",
        "fakerPT_BR"
      ]
    }
  },
  "China": {
    "countryFile": "china.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerZH_CN",
        "fakerZH_TW",
        "fakerJA"
      ]
    }
  },
  "Colombia": {
    "countryFile": "colombia.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerES",
        "fakerES_MX",
        "fakerPT_BR"
      ]
    }
  },
  "CoteDDIvoire": {
    "countryFile": "cote-d-ivoire.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR",
        "fakerFR_SN",
        "fakerEN_GH"
      ]
    }
  },
  "Cuba": {
    "countryFile": "cuba.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerES",
        "fakerES_MX",
        "fakerEN_US"
      ]
    }
  },
  "CzechRepublic": {
    "countryFile": "czech-republic.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerCS_CZ",
        "fakerSK",
        "fakerPL"
      ]
    }
  },
  "DominicanRepublic": {
    "countryFile": "dominican-republic.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerES",
        "fakerES_MX",
        "fakerEN_US"
      ]
    }
  },
  "DRCongo": {
    "countryFile": "dr-congo.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR",
        "fakerEN",
        "fakerFR_SN"
      ]
    }
  },
  "Ecuador": {
    "countryFile": "ecuador.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerES",
        "fakerES_MX",
        "fakerPT_BR"
      ]
    }
  },
  "Egypt": {
    "countryFile": "egypt.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerAR",
        "fakerFA",
        "fakerTR"
      ]
    }
  },
  "England": {
    "countryFile": "england.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_GB",
        "fakerEN_IE",
        "fakerEN"
      ]
    }
  },
  "Ethiopia": {
    "countryFile": "ethiopia.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN",
        "fakerAR",
        "fakerEN_GH"
      ]
    }
  },
  "France": {
    "countryFile": "france.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR",
        "fakerFR_BE",
        "fakerFR_CH"
      ]
    }
  },
  "Germany": {
    "countryFile": "germany.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerDE",
        "fakerDE_AT",
        "fakerDE_CH"
      ]
    }
  },
  "Ghana": {
    "countryFile": "ghana.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_GH",
        "fakerYO_NG",
        "fakerEN"
      ]
    }
  },
  "Greece": {
    "countryFile": "greece.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEL",
        "fakerIT",
        "fakerEN"
      ]
    }
  },
  "Guatemala": {
    "countryFile": "guatemala.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerES",
        "fakerES_MX",
        "fakerEN_US"
      ]
    }
  },
  "Guinea": {
    "countryFile": "guinea.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR",
        "fakerFR_SN",
        "fakerEN"
      ]
    }
  },
  "Haiti": {
    "countryFile": "haiti.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR",
        "fakerEN_US",
        "fakerES"
      ]
    }
  },
  "Honduras": {
    "countryFile": "honduras.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerES",
        "fakerES_MX",
        "fakerEN_US"
      ]
    }
  },
  "Hungary": {
    "countryFile": "hungary.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerHU",
        "fakerRO",
        "fakerDE"
      ]
    }
  },
  "India": {
    "countryFile": "india.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_IN",
        "fakerTA_IN",
        "fakerUR"
      ]
    }
  },
  "Indonesia": {
    "countryFile": "indonesia.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerID_ID",
        "fakerEN",
        "fakerVI"
      ]
    }
  },
  "Iran": {
    "countryFile": "iran.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFA",
        "fakerAR",
        "fakerTR"
      ]
    }
  },
  "Iraq": {
    "countryFile": "iraq.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerAR",
        "fakerFA",
        "fakerTR"
      ]
    }
  },
  "Ireland": {
    "countryFile": "ireland.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_IE",
        "fakerEN_GB",
        "fakerEN"
      ]
    }
  },
  "Israel": {
    "countryFile": "israel.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerHE",
        "fakerAR",
        "fakerEN"
      ]
    }
  },
  "Italy": {
    "countryFile": "italy.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerIT",
        "fakerFR",
        "fakerDE_CH"
      ]
    }
  },
  "Japan": {
    "countryFile": "japan.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerJA",
        "fakerZH_CN",
        "fakerKO"
      ]
    }
  },
  "Jordan": {
    "countryFile": "jordan.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerAR",
        "fakerHE",
        "fakerFA"
      ]
    }
  },
  "Kazakhstan": {
    "countryFile": "kazakhstan.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerRU",
        "fakerUZ_UZ_latin",
        "fakerTR"
      ]
    }
  },
  "Kenya": {
    "countryFile": "kenya.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_GH",
        "fakerEN",
        "fakerYO_NG"
      ]
    }
  },
  "Madagascar": {
    "countryFile": "madagascar.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR",
        "fakerEN",
        "fakerPT_PT"
      ]
    }
  },
  "Malawi": {
    "countryFile": "malawi.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN",
        "fakerEN_GH",
        "fakerEN_ZA"
      ]
    }
  },
  "Malaysia": {
    "countryFile": "malaysia.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN",
        "fakerID_ID",
        "fakerZH_CN"
      ]
    }
  },
  "Mali": {
    "countryFile": "mali.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR",
        "fakerFR_SN",
        "fakerAR"
      ]
    }
  },
  "Mexico": {
    "countryFile": "mexico.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerES_MX",
        "fakerES",
        "fakerEN_US"
      ]
    }
  },
  "Morocco": {
    "countryFile": "morocco.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerAR",
        "fakerFR",
        "fakerES"
      ]
    }
  },
  "Mozambique": {
    "countryFile": "mozambique.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerPT_PT",
        "fakerPT_BR",
        "fakerEN"
      ]
    }
  },
  "Myanmar": {
    "countryFile": "myanmar.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerTH",
        "fakerEN",
        "fakerVI"
      ]
    }
  },
  "Namibia": {
    "countryFile": "namibia.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_ZA",
        "fakerAF_ZA",
        "fakerDE"
      ]
    }
  },
  "Nepal": {
    "countryFile": "nepal.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerNE",
        "fakerEN_IN",
        "fakerTA_IN"
      ]
    }
  },
  "Netherlands": {
    "countryFile": "netherlands.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerNL",
        "fakerNL_BE",
        "fakerDE"
      ]
    }
  },
  "NewZealand": {
    "countryFile": "new-zealand.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_AU",
        "fakerEN_GB",
        "fakerEN"
      ]
    }
  },
  "Niger": {
    "countryFile": "niger.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR",
        "fakerAR",
        "fakerEN"
      ]
    }
  },
  "Nigeria": {
    "countryFile": "nigeria.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_NG",
        "fakerYO_NG",
        "fakerEN"
      ]
    }
  },
  "NorthKorea": {
    "countryFile": "north-korea.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerKO",
        "fakerZH_CN",
        "fakerJA"
      ]
    }
  },
  "Oman": {
    "countryFile": "oman.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerAR",
        "fakerFA",
        "fakerUR"
      ]
    }
  },
  "Pakistan": {
    "countryFile": "pakistan.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerUR",
        "fakerEN_IN",
        "fakerAR"
      ]
    }
  },
  "PapuaNewGuinea": {
    "countryFile": "papua-new-guinea.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_AU",
        "fakerEN",
        "fakerEN_US"
      ]
    }
  },
  "Peru": {
    "countryFile": "peru.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerES",
        "fakerES_MX",
        "fakerPT_BR"
      ]
    }
  },
  "Philippines": {
    "countryFile": "philippines.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN",
        "fakerES",
        "fakerEN_US"
      ]
    }
  },
  "Poland": {
    "countryFile": "poland.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerPL",
        "fakerSK",
        "fakerDE"
      ]
    }
  },
  "Portugal": {
    "countryFile": "portugal.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerPT_PT",
        "fakerPT_BR",
        "fakerES"
      ]
    }
  },
  "Romania": {
    "countryFile": "romania.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerRO",
        "fakerRO_MD",
        "fakerHU"
      ]
    }
  },
  "Russia": {
    "countryFile": "russia.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerRU",
        "fakerUK",
        "fakerPL"
      ]
    }
  },
  "Rwanda": {
    "countryFile": "rwanda.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN",
        "fakerFR",
        "fakerEN_GH"
      ]
    }
  },
  "SaudiArabia": {
    "countryFile": "saudi-arabia.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerAR",
        "fakerFA",
        "fakerUR"
      ]
    }
  },
  "Scotland": {
    "countryFile": "scotland.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_GB",
        "fakerEN_IE",
        "fakerEN"
      ]
    }
  },
  "Senegal": {
    "countryFile": "senegal.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR_SN",
        "fakerFR",
        "fakerEN_GH"
      ]
    }
  },
  "Somalia": {
    "countryFile": "somalia.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerAR",
        "fakerEN",
        "fakerFA"
      ]
    }
  },
  "SouthAfrica": {
    "countryFile": "south-africa.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_ZA",
        "fakerZU_ZA",
        "fakerAF_ZA"
      ]
    }
  },
  "SouthKorea": {
    "countryFile": "south-korea.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerKO",
        "fakerJA",
        "fakerZH_CN"
      ]
    }
  },
  "SouthSudan": {
    "countryFile": "south-sudan.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN",
        "fakerAR",
        "fakerEN_GH"
      ]
    }
  },
  "Spain": {
    "countryFile": "spain.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerES",
        "fakerES_MX",
        "fakerPT_PT"
      ]
    }
  },
  "SriLanka": {
    "countryFile": "sri-lanka.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_IN",
        "fakerTA_IN",
        "fakerEN"
      ]
    }
  },
  "Sudan": {
    "countryFile": "sudan.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerAR",
        "fakerEN",
        "fakerFA"
      ]
    }
  },
  "Sweden": {
    "countryFile": "sweden.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerSV",
        "fakerNB_NO",
        "fakerFI"
      ]
    }
  },
  "Switzerland": {
    "countryFile": "switzerland.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerDE_CH",
        "fakerFR_CH",
        "fakerIT"
      ]
    }
  },
  "Syria": {
    "countryFile": "syria.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerAR",
        "fakerFA",
        "fakerTR"
      ]
    }
  },
  "Taiwan": {
    "countryFile": "taiwan.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerZH_TW",
        "fakerZH_CN",
        "fakerJA"
      ]
    }
  },
  "Tajikistan": {
    "countryFile": "tajikistan.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerRU",
        "fakerUZ_UZ_latin",
        "fakerFA"
      ]
    }
  },
  "Tanzania": {
    "countryFile": "tanzania.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN",
        "fakerEN_GH",
        "fakerEN_ZA"
      ]
    }
  },
  "Thailand": {
    "countryFile": "thailand.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerTH",
        "fakerVI",
        "fakerEN"
      ]
    }
  },
  "Togo": {
    "countryFile": "togo.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerFR",
        "fakerFR_SN",
        "fakerEN_GH"
      ]
    }
  },
  "Tunisia": {
    "countryFile": "tunisia.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerAR",
        "fakerFR",
        "fakerIT"
      ]
    }
  },
  "Turkey": {
    "countryFile": "turkey.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerTR",
        "fakerAZ",
        "fakerAR"
      ]
    }
  },
  "UAE": {
    "countryFile": "uae.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerAR",
        "fakerFA",
        "fakerUR"
      ]
    }
  },
  "Uganda": {
    "countryFile": "uganda.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN",
        "fakerEN_GH",
        "fakerEN_ZA"
      ]
    }
  },
  "Ukraine": {
    "countryFile": "ukraine.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerUK",
        "fakerRU",
        "fakerPL"
      ]
    }
  },
  "UnitedKingdom": {
    "countryFile": "united-kingdom.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_GB",
        "fakerEN_IE",
        "fakerEN"
      ]
    }
  },
  "UnitedStates": {
    "countryFile": "united-states.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_US",
        "fakerEN",
        "fakerEN_CA"
      ]
    }
  },
  "Uzbekistan": {
    "countryFile": "uzbekistan.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerUZ_UZ_latin",
        "fakerRU",
        "fakerTR"
      ]
    }
  },
  "Venezuela": {
    "countryFile": "venezuela.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerES",
        "fakerES_MX",
        "fakerPT_BR"
      ]
    }
  },
  "Vietnam": {
    "countryFile": "vietnam.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.9,
      "method": "direct-country-locale",
      "notes": "Country-specific locale available."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerVI",
        "fakerTH",
        "fakerZH_CN"
      ]
    }
  },
  "WestIndies": {
    "countryFile": "west-indies.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN",
        "fakerEN_GH",
        "fakerEN_US"
      ]
    }
  },
  "Yemen": {
    "countryFile": "yemen.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.78,
      "method": "regional-language",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerAR",
        "fakerFA",
        "fakerUR"
      ]
    }
  },
  "Zambia": {
    "countryFile": "zambia.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN",
        "fakerEN_GH",
        "fakerEN_ZA"
      ]
    }
  },
  "Zimbabwe": {
    "countryFile": "zimbabwe.ts",
    "dataPoints": {
      "maleFirstNames": 60,
      "femaleFirstNames": 60,
      "maleLastNames": 40,
      "femaleLastNames": 40,
      "total": 200
    },
    "confidence": {
      "score": 0.64,
      "method": "regional-proxy",
      "notes": "Used closest open locale proxy/fallback."
    },
    "sources": {
      "name": "internal curated locale datasets",
      "url": "https://github.com/TKshadow018/character-generator",
      "localeExports": [
        "fakerEN_ZA",
        "fakerEN_GH",
        "fakerEN"
      ]
    }
  }
} as const;
