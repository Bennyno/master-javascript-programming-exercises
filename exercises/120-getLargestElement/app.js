function getLargestElement(arr) {
  // your code here
  if(arr.length == 0){
    return 0
  }
  let largest_num = 0
  for(n of arr){
    if(n > largest_num) largest_num = n
  }
  return largest_num
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;