import { validateEmail } from "./validateEmail";
test("debe verificar que un email contenga @ y .", () => {
  expect(validateEmail("babel@mail.com")).toBe(true);
  expect(() => validateEmail("babelmail.com")).toThrow("Email inválido");
  expect(() => validateEmail("babel@mailcom")).toThrow("Email inválido");
});

// toBe compara exactamente lo que devuelve la funcion
// en este caso validateEmail devulve true o un error, entonces la comparacion es validateEmail devuelve true? SI, entonces el test pasa
