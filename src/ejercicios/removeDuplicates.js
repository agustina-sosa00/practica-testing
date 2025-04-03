// export const removeDuplicate = (array) => {
//   const newArr = new Set(array);
//   return [...newArr];
// };

export const removeDuplicate = (array) => {
  return [...new Set(array)];
};
