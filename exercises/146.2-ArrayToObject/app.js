function fromListToObject(array) {
  // your code here
  let new_obj ={}
  for(e of array){
    new_obj[e[0]] = e[1]
  }
  return new_obj
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }