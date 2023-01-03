function joinArrayOfArrays(arr) {
  // your code here
  let new_arr = []
  for(n of arr) {
    new_arr = new_arr.concat(n)
 }
 return new_arr
}
let output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']