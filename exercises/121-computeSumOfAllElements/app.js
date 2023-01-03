function computeSumOfAllElements(arr) {
  // your code here
  let sum = 0
  for(n of arr) {
    sum += n
  }
  return sum
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6