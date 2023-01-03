function computeSummationToN(n) {
  // your code here
  let val = 0
  for(i=0; i < n + 1 ; i++){
    val += i
  }
  return val
}

let output = computeSummationToN(6);
console.log(output); // --> 21

