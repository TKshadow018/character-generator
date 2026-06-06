import { JOB_TITLES } from "./data/professions.js";
import { buildPersonAttributes } from "./person/attributes.js";
import { AVAILABLE_COUNTRIES, AVAILABLE_GENDERS, type Gender } from "./person/config.js";
import { randomAge } from "./person/age.js";
import { buildEmail } from "./person/email.js";
import { generateCity } from "./person/address.js";
import { generatePhoneNumber } from "./person/phone.js";
import { resolveNamePools } from "./person/name.js";
import { pickFromOption, randomItem } from "./person/random.js";
import { randomSalary } from "./person/salary.js";
import { randomNumber } from "./utils.js";
import type { CountryName } from "./names/common.js";
import type { CustomAttributeDefinition, GenerateNameOptions, GeneratePersonOptions, Person } from "./person/types.js";

export function generateName(options: GenerateNameOptions = {}): string {
	const gender = pickFromOption(options.gender, AVAILABLE_GENDERS);
	const country = pickFromOption(options.country, AVAILABLE_COUNTRIES);
	const { firstNames, lastNames } = resolveNamePools(country, gender);
	return `${randomItem(firstNames)} ${randomItem(lastNames)}`;
}

function resolvePersonName(options: GeneratePersonOptions, country: CountryName, gender: Gender): string {
	if (options.name) {
		return options.name;
	}

	const { firstNames, lastNames } = resolveNamePools(country, gender);
	const firstName = options.firstName ?? randomItem(firstNames);
	const lastName = options.lastName ?? randomItem(lastNames);

	return options.nameFormat === "lastFirst"
		? `${lastName}, ${firstName}`
		: `${firstName} ${lastName}`;
}

function resolveCity(cityOption: string | readonly string[] | undefined, country: CountryName): string {
	if (typeof cityOption === "string") {
		return cityOption;
	}

	if (Array.isArray(cityOption)) {
		return randomItem(cityOption);
	}

	return generateCity(country);
}

function randomFloat(min: number, max: number, decimals = 4): number {
	if (min > max) {
		throw new RangeError("min must be less than or equal to max");
	}

	const value = Math.random() * (max - min) + min;
	return Number(value.toFixed(decimals));
}

function resolveCustomAttributes(custom?: readonly CustomAttributeDefinition[]): Record<string, unknown> {
	if (!custom?.length) {
		return {};
	}

	return custom.reduce<Record<string, unknown>>((result, attribute) => {
		switch (attribute.type) {
			case "integer": {
				const min = Math.ceil(attribute.min);
				const max = Math.floor(attribute.max);
				result[attribute.field] = randomNumber(min, max);
				return result;
			}

			case "float": {
				result[attribute.field] = randomFloat(attribute.min, attribute.max);
				return result;
			}

			case "boolean": {
				result[attribute.field] = Math.random() >= 0.5;
				return result;
			}

			case "enum": {
				if (!attribute.values.length) {
					throw new RangeError("Enum attribute values must not be empty");
				}

				result[attribute.field] = randomItem(attribute.values);
				return result;
			}

			case "fixed": {
				result[attribute.field] = attribute.value;
				return result;
			}

			default: {
				throw new RangeError(`Unsupported custom attribute type: ${(attribute as CustomAttributeDefinition).type}`);
			}
		}
	}, {});
}

export function generatePerson(options: GeneratePersonOptions = {}): Person {
	const gender = pickFromOption(options.gender, AVAILABLE_GENDERS);
	const country = pickFromOption(options.country, AVAILABLE_COUNTRIES);
	const job = pickFromOption(options.jobs, JOB_TITLES);
	const name = resolvePersonName(options, country, gender);
	const attributes = buildPersonAttributes({
		educationLevel: options.educationLevel,
		maritalStatus: options.maritalStatus,
		employmentType: options.employmentType
	});
	const useCurrency = options.salaryCurrency || "USD";
	const salary = options.salaryExact ?? randomSalary(job, country, useCurrency, {
		min: options.salaryMin,
		max: options.salaryMax
	});
	const city = resolveCity(options.city, country);
	const phoneCountry = options.phoneCountry
		? pickFromOption(options.phoneCountry, [country])
		: country;
	const phone = options.phone ?? generatePhoneNumber(phoneCountry, options.phonePrefix);
	const email = options.email ?? buildEmail(name, country, options.emailDomain);
	const customAttributes = resolveCustomAttributes(options.custom);

	return {
		name,
		age: randomAge(options.minAge ?? 18, options.maxAge ?? 75),
		gender,
		country,
		city,
		job,
		salary,
		salaryCurrency: useCurrency,
		email,
		phone,
		...attributes,
		...customAttributes
	};
}

export function generatePersons(options: GeneratePersonOptions = {}, itemNumber: number): Person[] {
	return !Number.isInteger(itemNumber) || itemNumber < 1
		? []
		: (() => {
			let result: Person[] = [];
			for (let index = 0; index < itemNumber; index++) {
				result.push(generatePerson(options));
			}
			return result;
		})();
}

export const genName = generateName;
export const createName = generateName;
export const genPerson = generatePerson;
export const createPerson = generatePerson;
export const makePerson = generatePerson;
export const genPersons = generatePersons;
export const createPersons = generatePersons;
export const makePersons = generatePersons;
