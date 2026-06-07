import { EDUCATION_LEVELS, type EducationLevel } from "../data/education.js";
import {
  EMPLOYMENT_TYPES,
  type EmploymentType,
  type MaritalStatus
} from "../data/employment.js";
import { randomNumber } from "../utils.js";
import { randomItem } from "./random.js";
import type { CustomAttributeDefinition } from "./types.js";

export function buildPersonAttributes(options?: {
  age?: number;
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
    maritalStatus: options?.maritalStatus ?? resolveMaritalStatusByAge(options?.age),
    employmentType: options?.employmentType ?? randomItem(EMPLOYMENT_TYPES)
  };
}

function weightedRandomMaritalStatus(
  weightedStatuses: ReadonlyArray<{ status: MaritalStatus; weight: number }>
): MaritalStatus {
  const totalWeight = weightedStatuses.reduce((sum, item) => sum + item.weight, 0);
  const random = Math.random() * totalWeight;
  let cumulative = 0;

  for (const item of weightedStatuses) {
    cumulative += item.weight;
    if (random < cumulative) {
      return item.status;
    }
  }

  return weightedStatuses[weightedStatuses.length - 1].status;
}

function resolveMaritalStatusByAge(age: number | undefined): MaritalStatus {
  if (age === undefined) {
    return weightedRandomMaritalStatus([
      { status: "single", weight: 48 },
      { status: "married", weight: 48 },
      { status: "widowed", weight: 1 },
      { status: "divorced", weight: 3 }
    ]);
  }

  if (age <= 16) {
    return "single";
  }

  if (age <= 30) {
    return weightedRandomMaritalStatus([
      { status: "single", weight: 48 },
      { status: "married", weight: 48 },
      { status: "widowed", weight: 1 },
      { status: "divorced", weight: 3 }
    ]);
  }

  if (age <= 60) {
    return weightedRandomMaritalStatus([
      { status: "single", weight: 20 },
      { status: "married", weight: 73 },
      { status: "widowed", weight: 3 },
      { status: "divorced", weight: 4 }
    ]);
  }

  return weightedRandomMaritalStatus([
    { status: "single", weight: 10 },
    { status: "married", weight: 50 },
    { status: "widowed", weight: 35 },
    { status: "divorced", weight: 5 }
  ]);
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