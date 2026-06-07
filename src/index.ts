import { JOB_TITLES } from "./data/professions.js";
import { buildPersonAttributes, resolveCustomAttributes } from "./person/attributes.js";
import { AVAILABLE_COUNTRIES, AVAILABLE_GENDERS } from "./person/config.js";
import { buildEmail } from "./person/email.js";
import { resolveCity } from "./person/address.js";
import { generatePhoneNumber } from "./person/phone.js";
import { resolvePersonName, resolveNamePools } from "./person/name.js";
import { filterResultByOutput } from "./person/output.js";
import { resolveAgeAndDob } from "./person/age.js";
import { pickFromOption, randomItem } from "./person/random.js";
import { randomSalary } from "./person/salary.js";
import type { GenerateNameOptions, GeneratePersonOptions, GeneratePersonOutputOptions, Person } from "./person/types.js";

export function generateName(options: GenerateNameOptions = {}): string {
	const gender = pickFromOption(options.gender, AVAILABLE_GENDERS);
	const country = pickFromOption(options.country, AVAILABLE_COUNTRIES);
	const { firstNames, lastNames } = resolveNamePools(country, gender);
	return `${randomItem(firstNames)} ${randomItem(lastNames)}`;
}

export function generatePerson(options?: GeneratePersonOptions): Person;
export function generatePerson(options: GeneratePersonOptions, outputOptions: GeneratePersonOutputOptions): Partial<Person>;
export function generatePerson(options: GeneratePersonOptions = {}, outputOptions?: GeneratePersonOutputOptions): Person | Partial<Person> {
	const minAge = options.minAge ?? 18;
	const maxAge = options.maxAge ?? 75;
	const { age, dob } = resolveAgeAndDob(minAge, maxAge);

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
	const email = options.email ?? buildEmail(name, country, dob, options.emailDomain);
	const customAttributes = resolveCustomAttributes(options.custom);
	const result = {
		name,
		age,
		dob,
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
	return filterResultByOutput(result, outputOptions?.outputOption) as Person | Partial<Person>;
}

export function generatePersons(options: GeneratePersonOptions, itemNumber: number): Person[];
export function generatePersons(options: GeneratePersonOptions, itemNumber: number, outputOptions: GeneratePersonOutputOptions): Partial<Person>[];
export function generatePersons(options: GeneratePersonOptions = {}, itemNumber: number, outputOptions?: GeneratePersonOutputOptions): Person[] | Partial<Person>[] {
	if (!Number.isInteger(itemNumber) || itemNumber < 1) {
		return [];
	}

	const result: (Person | Partial<Person>)[] = [];
	for (let index = 0; index < itemNumber; index++) {
		result.push(outputOptions ? generatePerson(options, outputOptions) : generatePerson(options));
	}
	return result as Person[] | Partial<Person>[];
}

export const genName = generateName;
export const createName = generateName;
export const genPerson = generatePerson;
export const createPerson = generatePerson;
export const makePerson = generatePerson;
export const genPersons = generatePersons;
export const createPersons = generatePersons;
export const makePersons = generatePersons;

export { GeneratePersonOutputOption } from "./person/types.js";
