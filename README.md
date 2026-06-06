# faker-user

A flexible npm library for generating realistic random person profiles with country-aware names, phone numbers, salary estimates, contact details, and custom attributes.

## Overview

`faker-user` is designed for:

- prototyping user profiles
- test data generation
- game NPC generation
- demo apps and mock APIs

It supports deep customization through `generatePerson()`, `generatePersons()`, and `generateName()`.

## Install

Install from npm:

```bash
npm install faker-user
```

Or install locally from the repository:

```bash
npm install /path/to/faker-user
```

## Quick Start

```ts
import {
  generateName,
  genName,
  createName,
  generatePerson,
  genPerson,
  createPerson,
  makePerson,
  generatePersons,
  genPersons,
  createPersons,
  makePersons
} from "faker-user";

const simpleName = generateName();
const simpleNameAlias = genName();
console.log(simpleName, simpleNameAlias);

const person = generatePerson({
  country: ["UnitedStates"],
  jobs: ["Software Engineer"],
  salaryCurrency: "USD",
  phoneCountry: ["UnitedKingdom"],
  phone: "+44 7123456789"
});

const personAlias = createPerson({
  country: ["UnitedStates"],
  jobs: ["Software Engineer"]
});

const people = generatePersons({
  country: ["Canada"],
  jobs: ["Data Analyst"],
  minAge: 22,
  maxAge: 35,
  salaryCurrency: "CAD"
}, 3);

const peopleAlias = genPersons({
  country: ["Canada"],
  jobs: ["Data Analyst"]
}, 3);

console.log(person, personAlias, people, peopleAlias);
```

## APIs

### `generateName(options?)`

Generates a random full name from the available name pools.

Aliases: `genName`, `createName`

```ts
generateName({ country: "Japan", gender: "female" });
```

#### Options

- `country?: CountryName | CountryName[]`
- `gender?: "male" | "female" | readonly ("male" | "female")[]`

### `generatePerson(options?)`

Generates a complete person object with name, location, job, salary, email, phone, attributes, and custom fields.

Aliases: `genPerson`, `createPerson`, `makePerson`

```ts
const person = generatePerson({
  country: ["India", "UnitedStates"],
  gender: "female",
  jobs: ["Software Engineer", "Data Analyst"],
  minAge: 25,
  maxAge: 40
});
```

### `generatePersons(options?, itemNumber)`

Generates an array of `Person` objects using the same options for each generated entry.

Aliases: `genPersons`, `createPersons`, `makePersons`

```ts
const people = generatePersons({
  country: ["Canada"],
  jobs: ["Product Manager"]
}, 5);
```

## `generatePerson()` Options

### Basic options

- `country?: CountryName | readonly CountryName[]`
- `gender?: "male" | "female" | readonly ("male" | "female")[]`
- `jobs?: readonly JobTitle[]`
- `minAge?: number`
- `maxAge?: number`

### Salary options

- `salaryCurrency?: countryCurrencyCode` — target currency code for generated salary
- `salaryExact?: number` — force an exact salary value
- `salaryMin?: number` — minimum salary when generating a random value
- `salaryMax?: number` — maximum salary when generating a random value

### Name options

- `name?: string` — override the entire generated name
- `firstName?: string` — force the first name only
- `lastName?: string` — force the last name only
- `nameFormat?: "firstLast" | "lastFirst"` — control name layout

### Location & contact options

- `city?: string | readonly string[]` — fixed or selectable city value
- `email?: string` — exact email override
- `emailDomain?: string` — custom domain for generated email
- `phone?: string` — exact phone string override
- `phoneCountry?: CountryName | readonly CountryName[]` — use a different country phone format
- `phonePrefix?: string` — force the phone operator prefix

### Attribute and profile options

- `educationLevel?: EducationLevel`
- `maritalStatus?: MaritalStatus`
- `employmentType?: EmploymentType`

### Custom fields

The `custom` option allows you to append arbitrary custom fields to the generated person object.

Supported custom field types:

- `integer` — random integer between `min` and `max`
- `float` — random float between `min` and `max`
- `boolean` — `true` or `false`
- `enum` — one random value from `values`
- `fixed` — static fixed value

#### Example

```ts
const person = generatePerson({
  country: ["UnitedStates"],
  jobs: ["Software Engineer"],
  custom: [
    { field: "power", type: "integer", min: 1, max: 10 },
    { field: "playerType", type: "enum", values: ["warrior", "mage", "archer", "healer"] },
    { field: "isNPC", type: "boolean" },
    { field: "Special Group", type: "fixed", value: "The Adventurers Guild" },
    { field: "Luck", type: "float", min: 0, max: 1 }
  ]
});
```

## Result Object

`generatePerson()` returns a `Person` object containing all built-in fields plus any custom fields.

Built-in result fields include:

- `name`
- `age`
- `gender`
- `country`
- `city`
- `job`
- `salary`
- `salaryCurrency`
- `email`
- `phone`
- `educationLevel`
- `maritalStatus`
- `employmentType`

Custom fields are merged directly into the result object.

## How it works

`faker-user` assembles profiles by combining multiple generators:

- `generateName()` selects gendered first and last names from country-specific pools.
- `generatePerson()` resolves country, job, age, and profile metadata.
- Salary is calculated using a country multiplier and optional currency conversion.
- Email is built from the generated name and country, optionally using a custom domain.
- Phone numbers are generated using country dialing data and operator prefixes.
- `buildPersonAttributes()` selects education, marital status, and employment type.
- `custom` attributes are evaluated and appended to the final object.

## Development

To build the library locally:

```bash
npm install
npm run build
```

Run the test suite:

```bash
npm test
```

## Publish

Publish the package to npm:

```bash
npm login
npm publish --access public
```

## Contributing

Contributions are welcome! If you want to improve the generator, please:

1. fork the repository
2. create a feature branch
3. add tests for new behavior
4. open a pull request

Good contribution targets include:

- more country data and name pools
- tighter salary/currency mapping
- enhanced phone formatting
- additional custom attribute types
- documentation improvements

Thanks for contributing to `faker-user`! Feel free to open issues or PRs with ideas, bug fixes, or new examples.
