import isEven from "./isEven";

test("Debe retornar true si el numero que entra es par", () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(3)).toBe(false);
  expect(isEven(0)).toBe(true);
});
