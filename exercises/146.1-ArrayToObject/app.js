function transformFirstAndLast(array) {
  // your code here
  let new_obj = { [array[0]] : array[array.length - 1]}
  return new_obj
}

let output = transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])
console.log(output);