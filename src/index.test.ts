import { describe, expect, it } from "vitest";
import { generateName, generatePerson, generatePersons, GeneratePersonOutputOption } from "./index.js";

function calculateAgeFromDob(dob: string): number {
  const [year, month, day] = dob.split("-").map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age -= 1;
  }

  return age;
}

describe("generateName", () => {
  it("returns a first and last name for a specific country and gender", () => {
    const name = generateName({ country: "India", gender: "female" });

    expect(name).toMatch(/^[^\s]+\s[^\s]+$/);
    expect(name.length).toBeGreaterThan(3);
  });

  it("supports a name override and name order formatting", () => {
    const person = generatePerson({ name: "Aiko Tanaka", nameFormat: "lastFirst", country: ["Japan"], jobs: ["Software Engineer"] });

    expect(person.name).toBe("Aiko Tanaka");
    expect(person.email).toContain("@");
  });
});

describe("generatePerson", () => {
  it("returns a complete customizable person object", () => {
    const person = generatePerson({
      country: ["UnitedStates"],
      jobs: ["Software Engineer"],
      salaryCurrency: "USD",
      city: "Seattle",
      emailDomain: "customcorp.com",
      phonePrefix: "415",
      educationLevel: "Master's Degree",
      maritalStatus: "married",
      employmentType: "contract"
    });

    expect(person.country).toBe("UnitedStates");
    expect(person.city).toBe("Seattle");
    expect(person.email).toContain("@customcorp.com");
    expect(person.phone).toMatch(/^\+1\s415/);
    expect(person.educationLevel).toBe("Master's Degree");
    expect(person.maritalStatus).toBe("married");
    expect(person.employmentType).toBe("contract");
  });

  it("generates salary exactly when salaryExact is provided", () => {
    const person = generatePerson({
      country: ["India"],
      jobs: ["Software Engineer"],
      salaryCurrency: "INR",
      salaryExact: 120000
    });

    expect(person.salary).toBe(120000);
    expect(person.salaryCurrency).toBe("INR");
  });

  it("generates salary within a custom range when salaryMin and salaryMax are provided", () => {
    const person = generatePerson({
      country: ["Germany"],
      jobs: ["Software Engineer"],
      salaryCurrency: "EUR",
      salaryMin: 80000,
      salaryMax: 90000
    });

    expect(person.salary).toBeGreaterThanOrEqual(80000);
    expect(person.salary).toBeLessThanOrEqual(90000);
    expect(person.salaryCurrency).toBe("EUR");
  });

  it("returns only requested fields when outputOption is provided", () => {
    const person = generatePerson(
      {
        country: ["UnitedStates"],
        jobs: ["Software Engineer"]
      },
      { outputOption: [GeneratePersonOutputOption.Name, GeneratePersonOutputOption.Email] }
    );

    expect(person).toHaveProperty("name");
    expect(person).toHaveProperty("email");
    expect((person as any).country).toBeUndefined();
    expect(Object.keys(person)).toEqual(expect.arrayContaining(["name", "email"]));
  });

  it("returns a single field when outputOption is a string enum value", () => {
    const person = generatePerson(
      {
        country: ["UnitedStates"],
        jobs: ["Software Engineer"]
      },
      { outputOption: GeneratePersonOutputOption.Phone }
    );

    expect(person).toHaveProperty("phone");
    expect((person as any).name).toBeUndefined();
    expect(Object.keys(person)).toEqual(["phone"]);
  });

  it("returns dob when outputOption includes Dob", () => {
    const person = generatePerson(
      {
        country: ["UnitedStates"],
        jobs: ["Software Engineer"]
      },
      { outputOption: GeneratePersonOutputOption.Dob }
    );

    expect(person).toHaveProperty("dob");
    expect((person as any).name).toBeUndefined();
    expect((person as any).dob).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("supports custom phone country and exact phone override", () => {
    const person = generatePerson({
      country: ["UnitedStates"],
      jobs: ["Software Engineer"],
      phoneCountry: ["UnitedKingdom"],
      phone: "+44 7123456789"
    });

    expect(person.phone).toBe("+44 7123456789");
    expect(person.country).toBe("UnitedStates");
  });

  it("supports custom attributes of multiple types", () => {
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

    expect(typeof person.power).toBe("number");
    expect(person.power).toBeGreaterThanOrEqual(1);
    expect(person.power).toBeLessThanOrEqual(10);
    expect(["warrior", "mage", "archer", "healer"]).toContain(person.playerType as string);
    expect(typeof person.isNPC).toBe("boolean");
    expect(person["Special Group"]).toBe("The Adventurers Guild");
    expect(typeof person.Luck).toBe("number");
    expect(person.Luck as number).toBeGreaterThanOrEqual(0);
    expect(person.Luck as number).toBeLessThanOrEqual(1);
  });

  it("returns only requested fields for generatePersons when outputOption is provided", () => {
    const people = generatePersons(
      {
        country: ["UnitedStates"],
        jobs: ["Software Engineer"]
      },
      2,
      { outputOption: [GeneratePersonOutputOption.Name, GeneratePersonOutputOption.Email] }
    );

    expect(people).toHaveLength(2);
    expect(people[0]).toHaveProperty("name");
    expect(people[0]).toHaveProperty("email");
    expect((people[0] as any).country).toBeUndefined();
    expect(Object.keys(people[0])).toEqual(expect.arrayContaining(["name", "email"]));
  });

  it("falls back to default values when no options are provided", () => {
    const person = generatePerson();

    expect(person.age).toBeGreaterThanOrEqual(18);
    expect(person.age).toBeLessThanOrEqual(75);
    expect(person.dob).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(person.salaryCurrency).toBe("USD");
    expect(person.phone).toMatch(/^\+/);
    expect(person.email).toContain("@");
  });

  it("generates dob that satisfies provided minAge and maxAge", () => {
    const minAge = 30;
    const maxAge = 35;
    const person = generatePerson({
      country: ["Canada"],
      jobs: ["Data Analyst"],
      minAge,
      maxAge
    });

    const ageFromDob = calculateAgeFromDob(person.dob);
    expect(ageFromDob).toBeGreaterThanOrEqual(minAge);
    expect(ageFromDob).toBeLessThanOrEqual(maxAge);
    expect(person.age).toBe(ageFromDob);
  });
});
