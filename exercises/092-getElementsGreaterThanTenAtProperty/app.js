// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return []
    }

    let arr = obj[key]
    new_arr = []

    arr.forEach(e => {
        if(e > 10) {
            new_arr.push(e)
        }
    });
    return new_arr
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output);