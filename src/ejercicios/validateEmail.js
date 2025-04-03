// valida que un string tenga estructura de email básica(ej: contiene @ y .).
// Si no es válido, lanza error "Email inválido"

export const validateEmail = (string) => {
  const validate1 = string.includes("@");
  const validate2 = string.includes(".");
  if (validate1 && validate2) {
    return true;
  } else {
    throw new Error("Email inválido");
  }
};

// export const validateEmail = (string) => {
//   const validateE = string.includes("@", ".");
//   if (validateE) {
//     return validateE;
//   } else {
//     throw new Error("Email inválido");
//   }
// };

// el metodo includes solo acepta una condicion no se puede hacer includes("@", ".") es como decir en el string incluye "@."
