
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key]|| !Array.isArray(obj[key]) || obj[key].length == 0) {
      return [];
    }
    new_arr = []
    obj[key].map( n => n%2==0 ? new_arr.push(n) : [])
    return new_arr
}
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]