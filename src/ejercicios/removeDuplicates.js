export const removeDuplicate = (array) => {
  const newArr = new Set(array);
  return [...newArr];
};

// export const removeDuplicate = (array) => {
//   return [...new Set(array)];
// };

// la clase Set se utiliza para eliminar duplicados. Se lo puede utilizar con un array de numeros, strings y cualquier tipo de dato que sea comparable. Su funcionamiento es: mapea el array internamente y devuelve todos los valores unicos, es decir, que no se repiten.
