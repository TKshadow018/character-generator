import { EDUCATION_LEVELS } from "../data/education.js";
import {
  EMPLOYMENT_TYPES,
  MARITAL_STATUSES,
  type EmploymentType,
  type MaritalStatus
} from "../data/employment.js";
import { randomItem } from "./random.js";

export function buildPersonAttributes(options?: {
  educationLevel?: EducationLevel;
  maritalStatus?: MaritalStatus;
  employmentType?: EmploymentType;
}): {
  educationLevel: EducationLevel;
  maritalStatus: MaritalStatus;
  employmentType: EmploymentType;
} {
  return {
    educationLevel: options?.educationLevel ?? randomItem(EDUCATION_LEVELS),
    maritalStatus: options?.maritalStatus ?? randomItem(MARITAL_STATUSES),
    employmentType: options?.employmentType ?? randomItem(EMPLOYMENT_TYPES)
  };
}