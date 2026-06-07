export type Industry =
  | "Technology"
  | "Healthcare"
  | "Finance"
  | "Education"
  | "Creative"
  | "Sales"
  | "Operations"
  | "Engineering"
  | "Hospitality"
  | "Public Service"
  | "Sports"
  | "Other";

export type WorkTypeLevel = "entry" | "mid" | "senior";

export interface JobProfile {
  title: string;
  industry: Industry;
  workTypeLevel: WorkTypeLevel;
  minSalary: number;
  maxSalary: number;
}

export type JobTitle = JobProfile["title"];
