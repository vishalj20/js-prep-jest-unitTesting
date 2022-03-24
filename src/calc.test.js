import { sum, multiply } from "./calc";

test("sum working", () => {
  expect(sum(2, 3)).toBe(5);
});

test("multiply working", () => {
  expect(multiply(5, 2)).toBe(10);
});
