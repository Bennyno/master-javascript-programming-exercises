function filterOddElements(arr) {
  // your code here
  new_arr = []
  for(n of arr){
    if(n%2!=0)
      new_arr.push(n)
  }
    return new_arr
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]