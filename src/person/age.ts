import { randomNumber } from "../utils.js";
export function randomAge(min = 18, max = 75): number {
  return randomNumber(min, max);
}