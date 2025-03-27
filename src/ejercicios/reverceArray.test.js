import { reverseArray } from "./reverceArray";
test("La funcion debe recibir un array y retornar el array dado vuelta", () => {
  expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
});
// toEqual es el comparador que se utiliza con arrays u objetos, ya que compara estructura y contenido
