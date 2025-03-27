const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
export default capitalize;

// string.charAt(0) toma solo la primer posicion del string ej: "hola" -> "h"
// string.charAt(0).toUpperCase() toma la primer posicion del string y lo pasa a mayuscula ej: "hola" -> "h" -> "H"
// string.slice(1) agarra el string, pero a partir de la posicion 1 ej: "hola" -> "ola"
// por ultimo estamos retornando una concatenacion de "H" + "ola" = "Hola"
