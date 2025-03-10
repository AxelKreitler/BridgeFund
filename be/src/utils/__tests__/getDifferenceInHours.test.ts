import { getDifferenceInHours } from "../getDifferenceInHours";

describe("getDifferenceInHours tests", () => {
  // Note that we use Math.ceil to round up the number of hours
  it("should return 1 hour when the difference is less than an hour", () => {
    const startDate = new Date("2025-03-10T12:00:00Z");
    const endDate = new Date("2025-03-10T12:59:59Z");
    expect(getDifferenceInHours(startDate, endDate)).toBe(1);
  });

  it("should return 2 hours when the difference is more than an hour but less than two", () => {
    const startDate = new Date("2025-03-10T12:00:00Z");
    const endDate = new Date("2025-03-10T13:00:01Z");
    expect(getDifferenceInHours(startDate, endDate)).toBe(2);
  });

  it("should return 48 hours when the difference is two days", () => {
    const startDate = new Date("2025-03-10T00:00:00Z");
    const endDate = new Date("2025-03-12T00:00:00Z");
    expect(getDifferenceInHours(startDate, endDate)).toBe(48);
  });
});
