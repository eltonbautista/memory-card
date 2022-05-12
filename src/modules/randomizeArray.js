// A function used to randomize the contents of an array

const randomizeArray = (arr) => {
	let newArr = []
  let randomNum;
  let returnArr = [];
  
  // Incrementing numbers starting from 0 are pushed into newArr
  // Length of newArr dependent on passed array
  for (let i = 0; i < arr.length; i += 1) {
  	newArr.push(i);
  }
  // randomNum is a random number from 0 to newArr.length
  // returnArr's indices are random indices from the passed array
  // The point of this is to have returnArr be a "randomized" version of the passed array
  for (let i = 0; i < arr.length; i += 1) {
  		randomNum = newArr[Math.floor(Math.random() * newArr.length)];
      returnArr[i] = arr[randomNum]
      newArr.splice(newArr.indexOf(randomNum), 1)
  }
  
  return returnArr;
  
}

export default randomizeArray;