function transformEmployeeData(array) {
  // your code here
  let final =[]
  for(x of array){
    let obj = {}
    for(y of x){
      obj[y[0]] = y[1]
    }
    final.push(obj)
  }
  return final
}
let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output);