function listAllValues(obj) {
  // your code here
  let arr = []
  for(val in obj){
    arr.push(obj[val])
  }
  return arr
}

let output = listAllValues({name: "Krysten", age: 33, hasPets: false});
console.log(output);