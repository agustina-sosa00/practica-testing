// Recibe un nombre completo (ej: "Juan Pérez") y devuelve las iniciales (ej: "JP").
export const getInitials = (name) => {
  const arrayName = name.split(" ");
  const response = arrayName.map((e) => e.toUpperCase().charAt(0));
  return response.join("");
};
