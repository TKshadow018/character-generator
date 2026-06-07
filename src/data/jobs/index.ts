import { TECHNOLOGY_JOBS } from "./technology.js";
import { HEALTHCARE_JOBS } from "./healthcare.js";
import { FINANCE_JOBS } from "./finance.js";
import { EDUCATION_JOBS } from "./education.js";
import { CREATIVE_JOBS } from "./creative.js";
import { SALES_JOBS } from "./sales.js";
import { OPERATIONS_JOBS } from "./operations.js";
import { ENGINEERING_JOBS } from "./engineering.js";
import { HOSPITALITY_JOBS } from "./hospitality.js";
import { PUBLICSERVICE_JOBS } from "./public-service.js";
import { SPORTS_JOBS } from "./sports.js";
import type { JobProfile, JobTitle } from "./types.js";

export const JOB_PROFILES = [
  ...TECHNOLOGY_JOBS,
  ...HEALTHCARE_JOBS,
  ...FINANCE_JOBS,
  ...EDUCATION_JOBS,
  ...CREATIVE_JOBS,
  ...SALES_JOBS,
  ...OPERATIONS_JOBS,
  ...ENGINEERING_JOBS,
  ...HOSPITALITY_JOBS,
  ...PUBLICSERVICE_JOBS,
  ...SPORTS_JOBS
] as const satisfies readonly JobProfile[];

export const JOB_TITLES = JOB_PROFILES.map((profile) => profile.title) as readonly JobTitle[];
