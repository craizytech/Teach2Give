import { expect, it } from "vitest";

// I added the types to the parameters  a and b
//This ensures we ts understands the contracts that our functions must meet
export const addTwoNumbers = (a: number, b: number) => {
  return a + b;
};

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});