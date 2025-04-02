export const divide = (n1, n2) => {
  if (n2 === 0) {
    throw Error("no se puede dividir por cero");
  } else {
    return n1 / n2;
  }
};
