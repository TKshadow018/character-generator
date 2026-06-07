import type { CountryName } from "../names/common.js";
import type { EducationLevel } from "../data/education.js";
import type { EmploymentType, MaritalStatus } from "../data/employment.js";
import type { JobTitle } from "../data/professions.js";
import type { Gender } from "./config.js";
import type { countryCurrencyCode } from "../data/countryCurrencyCode.js";

export interface GenerateNameOptions {
  country?: CountryName | readonly CountryName[];
  gender?: Gender | readonly Gender[];
}

type CustomAttributeType = "integer" | "float" | "boolean" | "enum" | "fixed";

interface CustomBase {
  field: string;
  type: CustomAttributeType;
}

export interface IntegerCustomAttribute extends CustomBase {
  type: "integer";
  min: number;
  max: number;
}

export interface FloatCustomAttribute extends CustomBase {
  type: "float";
  min: number;
  max: number;
}

export interface BooleanCustomAttribute extends CustomBase {
  type: "boolean";
}

export interface EnumCustomAttribute extends CustomBase {
  type: "enum";
  values: readonly string[];
}

export interface FixedCustomAttribute extends CustomBase {
  type: "fixed";
  value: string | number | boolean;
}

export type CustomAttributeDefinition =
  | IntegerCustomAttribute
  | FloatCustomAttribute
  | BooleanCustomAttribute
  | EnumCustomAttribute
  | FixedCustomAttribute;

export interface GeneratePersonOptions extends GenerateNameOptions {
  minAge?: number;
  maxAge?: number;
  jobs?: readonly JobTitle[];
  salaryCurrency?: countryCurrencyCode;
  salaryExact?: number;
  salaryMin?: number;
  salaryMax?: number;
  educationLevel?: EducationLevel;
  maritalStatus?: MaritalStatus;
  employmentType?: EmploymentType;
  city?: string | readonly string[];
  email?: string;
  emailDomain?: string;
  phone?: string;
  phoneCountry?: CountryName | readonly CountryName[];
  phonePrefix?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  nameFormat?: "firstLast" | "lastFirst";
  custom?: readonly CustomAttributeDefinition[];
}

export enum GeneratePersonOutputOption {
  Name = "name",
  Age = "age",
  Dob = "dob",
  Gender = "gender",
  Country = "country",
  City = "city",
  Job = "job",
  Salary = "salary",
  SalaryCurrency = "salaryCurrency",
  Email = "email",
  Phone = "phone",
  EducationLevel = "educationLevel",
  MaritalStatus = "maritalStatus",
  EmploymentType = "employmentType"
}

export interface GeneratePersonOutputOptions {
  outputOption?: GeneratePersonOutputOption | readonly GeneratePersonOutputOption[];
}

export interface Person {
  name: string;
  age: number;
  dob: string;
  gender: Gender;
  country: CountryName;
  city: string;
  job: JobTitle;
  salary: number;
  salaryCurrency: countryCurrencyCode;
  email: string;
  phone: string;
  educationLevel: EducationLevel;
  maritalStatus: MaritalStatus;
  employmentType: EmploymentType;
  [customField: string]: unknown;
}