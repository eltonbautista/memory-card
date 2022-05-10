import randomizeArray from "./randomizeArray";

const mapList = (arrayToMap) => {
  let increment = 0;
  const arrayRandomized = randomizeArray(arrayToMap);

console.log(arrayRandomized);

  arrayToMap.map((element) => {
    
    increment += 1;
    return (
      <li key={'card' + increment}>{element}</li>
    )
  })
  return arrayRandomized;
}

export default mapList;