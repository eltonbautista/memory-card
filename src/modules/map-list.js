import randomizeArray from "./randomizeArray";

// A function used to map the passed array
// It utilizes my randomizeArray module to shuffle the array's contents
 
const mapList = (arrayToMap) => {
  let increment = 0;
  const arrayRandomized = randomizeArray(arrayToMap);

  arrayToMap.map((element) => {
    
    increment += 1;
    return (
      <li key={'card' + increment}>{element}</li>
    )
  })
  return arrayRandomized;
}

export default mapList;