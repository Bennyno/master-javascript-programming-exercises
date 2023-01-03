function convertObjectToList(obj) {
  // your code here
  let arr = []
  for(val in obj){
    arr.push([val, obj[val]])
  }
  return arr
}

let output = convertObjectToList({name: "Holly", age: 35, role: "producer"});
console.log(output);