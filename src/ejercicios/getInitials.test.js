import { getInitials } from "./getInitials";
test("debe recibir un string y devolver la primer letra en mayuscula", () => {
  expect(getInitials("agustina sosa")).toBe("AS");
  expect(getInitials("Leandro Mortarini")).toBe("LM");
  expect(getInitials("")).toBe("");
  expect(getInitials("fran")).toBe("F");
});
