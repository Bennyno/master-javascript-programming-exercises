let obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key]|| !Array.isArray(obj[key]) || obj[key].length == 0) {
      return [];
    }
    let new_obj =[]
    obj[key].map( e => e %2!=0 ? new_obj.push(e): [])
    return new_obj
}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]