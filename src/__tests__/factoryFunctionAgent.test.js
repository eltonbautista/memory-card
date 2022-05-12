import factoryFunctionAgent from "../modules/factoryFunctionAgent";

const astra = factoryFunctionAgent('astra', '../assets/astra.png', false);

test('Testing agent factory function', () => {
  expect(astra)
    .toEqual({
      imageAlt: 'astra',
      imageSrc: '../assets/astra.png',
      isSelected: false,
      isSelectedTrue: astra.isSelectedTrue
    })
})

test('Using public method to modify property value', () => {
  astra.isSelectedTrue()
  expect(astra.isSelected).toBe(true);
})