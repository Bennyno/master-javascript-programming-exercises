let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if(!obj[key]|| !Array.isArray(obj[key]) || obj[key].length == 0) {
      return [];
}
    let new_arr = []
    for(i=0;i<obj[key].length;i++)
    if(obj[key][i].length%2==0) {
    new_arr.push(obj[key][i])
    }
    return new_arr
}

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']