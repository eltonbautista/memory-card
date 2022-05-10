// Okay so the function will take in an array.
// A new array will be built depending on the array's length with incrementing numbers.

const randomizeArray = (arr) => {
	let newArr = []
  let randomNum;
  let returnArr = [];
  
  for (let i = 0; i < arr.length; i += 1) {
  	newArr.push(i);
  }
  
  for (let i = 0; i < arr.length; i += 1) {
  		randomNum = newArr[Math.floor(Math.random() * newArr.length)];
      returnArr[i] = arr[randomNum]
      newArr.splice(newArr.indexOf(randomNum), 1)
  }
  
  return returnArr;
  
}

export default randomizeArray;