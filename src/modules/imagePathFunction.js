// Helper function for my image paths

const buildMyValues = (lengthOfArray, arrayToPushInto, helperFunction, ...helperFunctionParams) => {
  for (let i = 0; i < lengthOfArray.length; i += 1) {
    arrayToPushInto
    .push(helperFunction(helperFunctionParams[0][i]));
  }
}
export default buildMyValues;