import capitalize from "./capitalize";
test("La funcion recibe un string y debe devolverlo con la primera letra en mayuscula", () => {
  expect(capitalize("hola")).toBe("Hola");
});
