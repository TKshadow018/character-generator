import { randomNumber } from "../utils.js";
export function randomAge(min = 18, max = 75): number {
  return randomNumber(min, max);
}

function formatDob(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function calculateAgeFromDob(date: Date): number {
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > date.getMonth() ||
    (today.getMonth() === date.getMonth() && today.getDate() >= date.getDate());

  if (!hasBirthdayPassed) {
    age -= 1;
  }

  return age;
}

export function generateDobInAgeRange(minAge: number, maxAge: number): Date {
  if (minAge > maxAge) {
    throw new RangeError("minAge must be less than or equal to maxAge");
  }

  const today = new Date();
  const latestDob = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
  const earliestDob = new Date(today.getFullYear() - (maxAge + 1), today.getMonth(), today.getDate() + 1);
  const start = earliestDob.getTime();
  const end = latestDob.getTime();
  const randomTime = randomNumber(start, end);
  return new Date(randomTime);
}

export function resolveAgeAndDob(minAge: number, maxAge: number): { age: number; dob: string } {
  const dobDate = generateDobInAgeRange(minAge, maxAge);
  return {
    age: calculateAgeFromDob(dobDate),
    dob: formatDob(dobDate)
  };
}