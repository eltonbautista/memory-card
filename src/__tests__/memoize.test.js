import memoize from "../modules/memoize";

const add = (a, b) => {
  return a + 10;
}

const memoizeAdd = memoize(add);
console.log(memoizeAdd(1))

test('Testing add', () => {
  expect(add(1, 3)).toBe(11);
})

test('Testing memoize function', () => {
  expect(memoizeAdd(1)).toBe(11);
})