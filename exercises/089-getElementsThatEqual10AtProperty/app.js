// Write your function here

function getElementsThatEqual10AtProperty(obj, key) {
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return []
    }
    let arr = obj[key];
    let new_arr = []

    arr.forEach(e => {
        if(e == 10)
        new_arr.push(e)        
    });
    return new_arr
}

let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output);