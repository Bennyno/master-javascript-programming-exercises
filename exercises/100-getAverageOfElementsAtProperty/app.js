function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
    return 0;
  }
    new_arr = 0
    for(i=0;i<obj[key].length;i++){
      new_arr += obj[key][i]
    }
    return new_arr/obj[key].length
}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);