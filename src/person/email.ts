import type { CountryName } from "../names/common.js";

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

export function buildEmail(name: string, country: CountryName, customDomain?: string): string {
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.length > 0 ? rest[rest.length - 1] : "person";
  const localPart = `${normalizeNamePart(firstName)}.${normalizeNamePart(lastName)}`;
  const domain = customDomain ? normalizeDomain(customDomain) : `${normalizeNamePart(country)}.example.com`;
  return `${localPart}@${domain}`;
}