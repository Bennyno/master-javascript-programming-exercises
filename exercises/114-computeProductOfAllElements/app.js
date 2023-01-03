function computeProductOfAllElements(arr) {
  // your code here
  if(arr.length == 0){
    return 0;
  }
  let product = 1
  for(n of arr){
    product *= n
  }
  return product
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

