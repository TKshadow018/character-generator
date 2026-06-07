import type { CountryName } from "../names/common.js";

type WeightedDomain = {
  domain: string;
  weight: number;
};

// Top public providers weighted heavily based on real-world market share approximations
const TOP_PROVIDERS: WeightedDomain[] = [
  { domain: "gmail.com", weight: 450 },
  { domain: "yahoo.com", weight: 150 },
  { domain: "outlook.com", weight: 120 },
  { domain: "hotmail.com", weight: 60 },
  { domain: "icloud.com", weight: 30 },
  { domain: "aol.com", weight: 20 },
  { domain: "protonmail.com", weight: 15 },
  { domain: "zoho.com", weight: 10 },
  { domain: "yandex.com", weight: 10 },
  { domain: "mail.com", weight: 10 },
  { domain: "gmx.com", weight: 5 },
  { domain: "fastmail.com", weight: 5 },
  { domain: "hushmail.com", weight: 5 }
];

// Fictional and realistic business/tech domains given a baseline weight of 1
const BUSINESS_DOMAINS: WeightedDomain[] = [
  "techcorp.com", "softworks.net", "devstudio.io", "innovatellc.com", "nexusglobal.net",
  "apexconsulting.org", "summitenterprises.com", "pinnaclegroup.io", "vanguardtech.com", "horizonbiz.net",
  "synergyinc.com", "quantumtech.io", "stellarcorp.net", "omegaenterprises.com", "alphasolutions.com",
  "zenithgroup.net", "novacorp.io", "atlastech.com", "primeindustries.net", "matrixsolutions.com",
  "vectorgroup.io", "pulsetech.com", "acmecorp.net", "globex.io", "initech.com",
  "umbrellacorp.net", "massive.io", "aperture.com", "blackmesa.net", "cyberdyne.io",
  "weyland.com", "tyrell.net", "stark.io", "wayneenterprises.com", "oscorp.net",
  "virtucon.io", "cogswell.com", "spacely.net", "macmillan.io", "sterling.com",
  "dundermifflin.net", "wernhamhogg.io", "techsolutions.com", "globalbiz.net", "enterprise.io",
  "capitalgrp.com", "apexfinance.net", "summitwealth.io", "pinnaclecapital.com", "vanguardinvest.net",
  "horizonfinance.io", "synergywealth.com", "quantumcapital.net", "stellarinvest.io", "omegafinance.com",
  "alphacapital.net", "zenithwealth.io", "novainvest.com", "atlasfinance.net", "primecapital.io",
  "matrixwealth.com", "vectorinvest.net", "pulsefinance.io", "acmecapital.com", "globexfinance.net",
  "initechwealth.io", "umbrellainvest.com", "massivecapital.net", "aperturefinance.io", "blackmesawealth.com",
  "cyberdyneinvest.net", "weylandcapital.io", "tyrellfinance.com", "starkwealth.net", "wayneinvest.io",
  "oscorpcapital.com", "virtuconfinance.net", "cogswellwealth.io", "spacelyinvest.com", "macmillancapital.net",
  "sterlingfinance.io", "dundermifflinwealth.com", "wernhamhogginvest.net", "techfinance.io", "globalcapital.com",
  "enterprisefinance.net", "capitalwealth.io", "apexinvest.com", "summitcapital.net", "pinnaclefinance.io",
  "vanguardwealth.com", "horizoninvest.net", "synergycapital.io", "quantumfinance.com", "stellarwealth.net",
  "omegainvest.io", "alphacapital.com", "zenithfinance.net", "novawealth.io", "atlasinvest.com",
  "primecapital.net", "matrixfinance.io", "vectorwealth.com", "pulseinvest.net", "acmecapital.io",
  "globexwealth.com", "initechinvest.net", "umbrellafinance.io", "massivewealth.com", "apertureinvest.net",
  "blackmesacapital.io", "cyberdynefinance.com", "weylandwealth.net", "tyrellinvest.io", "starkcapital.com",
  "waynefinance.net", "oscorpwealth.io", "virtuconinvest.com", "cogswellcapital.net", "spacelyfinance.io",
  "macmillanwealth.com", "sterlinginvest.net", "dundermifflincapital.io", "wernhamhoggfinance.com",
  "tutanota.com", "mailbox.org", "runbox.com", "posteo.net", "startmail.com", "countermail.com", 
  "hey.com", "skiff.com", "lavabit.com", "kolabnow.com", "mailfence.com", "thexyz.com", "rackspace.com",
  "godaddy.com", "namecheap.com", "bluehost.com", "hostgator.com", "siteground.com",
  "dreamhost.com", "a2hosting.com", "inmotionhosting.com", "hostinger.com", "wpengine.com",
  "kinsta.com", "liquidweb.com", "nexcess.net", "flywheel.com", "pantheon.io",
  "acquia.com", "platform.sh", "heroku.com", "digitalocean.com", "linode.com",
  "vultr.com", "aws.amazon.com", "azure.microsoft.com", "cloud.google.com", "ibm.com",
  "oracle.com", "alibaba.com", "tencent.com", "baidu.com", "salesforce.com",
  "hubspot.com", "marketo.com", "mailchimp.com", "constantcontact.com", "sendgrid.com",
  "twilio.com", "plivo.com", "bandwidth.com", "sinch.com", "vonage.com",
  "infobip.com", "messagebird.com", "routeiq.com", "clickatell.com", "nexmo.com",
  "gupshup.io", "kaleyra.com", "vibes.com", "attentive.com", "braze.com"
].map(domain => ({ domain, weight: 1 }));

const REALISTIC_DOMAINS: WeightedDomain[] = [...TOP_PROVIDERS, ...BUSINESS_DOMAINS];

// Signature: first, last, yyyy, yy, mm, dd, country
type LocalPartPattern = (f: string, l: string, yyyy: string, yy: string, mm: string, dd: string, c: string) => string;

const LOCAL_PART_PATTERNS: LocalPartPattern[] = [
  // Basic Names (10)
  (f, l) => `${f}.${l}`,
  (f, l) => `${f}${l}`,
  (f, l) => `${f.charAt(0)}.${l}`,
  (f, l) => `${f.charAt(0)}${l}`,
  (f, l) => `${f}.${l.charAt(0)}`,
  (f, l) => `${f}${l.charAt(0)}`,
  (f, l) => `${l}.${f}`,
  (f, l) => `${l}${f}`,
  (f, l) => `${f}_${l}`,
  (f, l) => `${f}-${l}`,

  // Names + Full Year (10)
  (f, l, yyyy) => `${f}.${l}${yyyy}`,
  (f, l, yyyy) => `${f}${l}${yyyy}`,
  (f, l, yyyy) => `${f.charAt(0)}${l}${yyyy}`,
  (f, l, yyyy) => `${f}${l.charAt(0)}${yyyy}`,
  (f, l, yyyy) => `${l}${f}${yyyy}`,
  (f, l, yyyy) => `${f}_${l}_${yyyy}`,
  (f, l, yyyy) => `${f}-${l}-${yyyy}`,
  (f, l, yyyy) => `${f}${yyyy}`,
  (f, l, yyyy) => `${l}${yyyy}`,
  (f, l, yyyy) => `${f.charAt(0)}${l.charAt(0)}${yyyy}`,

  // Names + Short Year (10)
  (f, l, yyyy, yy) => `${f}.${l}${yy}`,
  (f, l, yyyy, yy) => `${f}${l}${yy}`,
  (f, l, yyyy, yy) => `${f.charAt(0)}${l}${yy}`,
  (f, l, yyyy, yy) => `${f}${l.charAt(0)}${yy}`,
  (f, l, yyyy, yy) => `${l}${f}${yy}`,
  (f, l, yyyy, yy) => `${f}_${l}${yy}`,
  (f, l, yyyy, yy) => `${f}-${l}${yy}`,
  (f, l, yyyy, yy) => `${f}${yy}`,
  (f, l, yyyy, yy) => `${l}${yy}`,
  (f, l, yyyy, yy) => `${f.charAt(0)}${l.charAt(0)}${yy}`,

  // Names + Month/Day Combinations (10)
  (f, l, yyyy, yy, mm, dd) => `${f}${dd}${mm}`,
  (f, l, yyyy, yy, mm, dd) => `${f}.${l}.${dd}${mm}`,
  (f, l, yyyy, yy, mm, dd) => `${f}${l}${mm}${dd}`,
  (f, l, yyyy, yy, mm, dd) => `${f.charAt(0)}${l}${dd}`,
  (f, l, yyyy, yy, mm, dd) => `${f}_${l}_${mm}${dd}`,
  (f, l, yyyy, yy, mm, dd) => `${l}${f}${dd}`,
  (f, l, yyyy, yy, mm, dd) => `${f.charAt(0)}${l.charAt(0)}${mm}${dd}`,
  (f, l, yyyy, yy, mm, dd) => `${f}${mm}${yy}`,
  (f, l, yyyy, yy, mm, dd) => `${f}.${l}-${dd}-${mm}`,
  (f, l, yyyy, yy, mm, dd) => `${f}-${dd}${mm}${yy}`,

  // Names + Country + Dates (10)
  (f, l, yyyy, yy, mm, dd, c) => `${c}.${f}.${l}`,
  (f, l, yyyy, yy, mm, dd, c) => `${f}.${l}.${c}`,
  (f, l, yyyy, yy, mm, dd, c) => `${c}_${f}${l}`,
  (f, l, yyyy, yy, mm, dd, c) => `${f}${l}.${c}`,
  (f, l, yyyy, yy, mm, dd, c) => `${f.charAt(0)}${l}.${c}`,
  (f, l, yyyy, yy, mm, dd, c) => `${f}.${c}${yyyy}`,
  (f, l, yyyy, yy, mm, dd, c) => `${c}.${f}${yy}`,
  (f, l, yyyy, yy, mm, dd, c) => `hello.${f}.${c}`,
  (f, l, yyyy, yy, mm, dd, c) => `${f}_${l}_${c}${dd}`,
  (f, l, yyyy, yy, mm, dd, c) => `${c}-${f}-${yyyy}`
];

function normalizeNamePart(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function normalizeDomain(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9.-]+/g, "")
    .replace(/(^[.-]+|[.-]+$)/g, "") || "example.com";
}

function getRandomDomainWeighted(domains: WeightedDomain[]): string {
  const totalWeight = domains.reduce((sum, item) => sum + item.weight, 0);
  let randomNum = Math.random() * totalWeight;
  
  for (const item of domains) {
    if (randomNum < item.weight) {
      return item.domain;
    }
    randomNum -= item.weight;
  }
  
  return domains[domains.length - 1].domain;
}

export function buildEmail(name: string, country: CountryName, dob: string, customDomain?: string): string {
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.length > 0 ? rest[rest.length - 1] : "person";
  
  const normFirstName = normalizeNamePart(firstName) || "f";
  const normLastName = normalizeNamePart(lastName) || "l";
  const normCountry = normalizeNamePart(country) || "global";
  
  // Parse dob (expected format: "YYYY-MM-DD")
  const [yearStr = "1990", monthStr = "01", dayStr = "01"] = dob.split("-");
  
  // Fallbacks just in case the string is malformed
  const yyyy = yearStr.length === 4 ? yearStr : "1990";
  const yy = yyyy.slice(-2);
  const mm = monthStr.padStart(2, "0").slice(0, 2);
  const dd = dayStr.padStart(2, "0").slice(0, 2);

  const randomPattern = LOCAL_PART_PATTERNS[Math.floor(Math.random() * LOCAL_PART_PATTERNS.length)];
  const localPart = randomPattern(normFirstName, normLastName, yyyy, yy, mm, dd, normCountry);
  
  const domain = customDomain 
    ? normalizeDomain(customDomain) 
    : getRandomDomainWeighted(REALISTIC_DOMAINS);
  
  return `${localPart}@${domain}`;
}