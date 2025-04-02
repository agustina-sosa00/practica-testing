import { divide } from "./divide";
test("se debe poder dividir dos numeros ", () => {
  expect(divide(6, 2)).toBe(3);
  expect(() => divide(10, 0)).toThrow("no se puede dividir por cero");
});

// Este es un ejercicio donde debo captar un error si es que la funcion quiere dividir un numero por cero.
// Dato importante: el test se escribe primero, por ende, la funcion debe amoldarse al test. En este ejemplo, la funcion divide, debe ejecutar un error en el caso de que se intente dividir por cero.
