import { removeDuplicate } from "./removeDuplicates";
test("debe elimiar los duplicados de un array", () => {
  expect(removeDuplicate([1, 1, 2])).toEqual([1, 2]);
  expect(removeDuplicate(["a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
  expect(removeDuplicate([])).toEqual([]);
});
