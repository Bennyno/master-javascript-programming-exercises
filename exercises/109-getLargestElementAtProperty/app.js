let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    if(!obj[key]|| !Array.isArray(obj[key]) || obj[key].length == 0) {
      return [];
    }
    let highest_num = 0;
    obj[key].map(n => n > highest_num ? highest_num = n : [])
    return highest_num
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4