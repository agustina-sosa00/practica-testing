import sumar from "./funcion";
test("sumar 2+2 debe ser igual a 4", () => {
  expect(sumar(2, 2)).toBe(4);
});
