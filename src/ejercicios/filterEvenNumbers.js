// Devuelve solo los números pares de un array.
export const filterEvenNumbers = (array) => {
  const arrayErr = array.filter((e) => typeof e !== "number");
  if (arrayErr.length > 0) {
    throw new Error("El array debe contener solo numeros");
  }
  return array.filter((n) => n % 2 === 0);
};
