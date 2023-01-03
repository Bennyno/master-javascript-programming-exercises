function squareElements(arr) {
  // your code here
  new_arr = []
  for(e of arr){
    new_arr.push(e * e)
  }
  return new_arr
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]