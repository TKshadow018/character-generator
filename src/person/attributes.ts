import { EDUCATION_LEVELS, type EducationLevel } from "../data/education.js";
import {
  EMPLOYMENT_TYPES,
  MARITAL_STATUSES,
  type EmploymentType,
  type MaritalStatus
} from "../data/employment.js";
import { randomNumber } from "../utils.js";
import { randomItem } from "./random.js";
import type { CustomAttributeDefinition } from "./types.js";

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

function randomFloat(min: number, max: number, decimals = 4): number {
  if (min > max) {
    throw new RangeError("min must be less than or equal to max");
  }

  const value = Math.random() * (max - min) + min;
  return Number(value.toFixed(decimals));
}

export function resolveCustomAttributes(custom?: readonly CustomAttributeDefinition[]): Record<string, unknown> {
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