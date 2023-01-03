function removeFromBackOfNew(arr) {
  // your code here
  return arr.slice(0, -1)
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); 
console.log(arr);