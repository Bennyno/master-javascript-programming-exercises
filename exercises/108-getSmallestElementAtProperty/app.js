let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    if(!obj[key]|| !Array.isArray(obj[key]) || obj[key].length == 0) {
      return [];
    }
    let least_num = 10000;
    obj[key].map(n => n < least_num? least_num = n : [])
    return least_num
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1