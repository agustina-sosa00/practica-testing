import { filterEvenNumbers } from "./filterEvenNumbers";
test("debe recibir un array y devolver solo los numeros pares", () => {
  expect(filterEvenNumbers([1, 2, 3, 4])).toEqual([2, 4]);
  expect(filterEvenNumbers([5, 9])).toEqual([]);
  expect(filterEvenNumbers([])).toEqual([]);
  expect(() => filterEvenNumbers(["a", 1, 3])).toThrow(
    "El array debe contener solo numeros"
  );
});
