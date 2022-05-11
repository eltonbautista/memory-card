import factoryFunctionAgent from "../modules/factoryFunctionAgent";

const astra = factoryFunctionAgent('astra', '../assets/astra.png', false);

test('Testing agent factory function', () => {
  expect(astra)
    .toEqual({
      imageAlt: 'astra',
      imageSrc: '../assets/astra.png',
      isSelected: false,
      toggleIsSelected: astra.toggleIsSelected
    })
})