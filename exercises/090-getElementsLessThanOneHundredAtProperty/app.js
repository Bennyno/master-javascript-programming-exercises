// Write your function here

function getElementsLessThan100AtProperty(obj, key) {
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return []
    }
    let arr = obj[key];
    let new_arr = []

    arr.forEach(e => {
        if(e < 100)
        new_arr.push(e)        
    });
    return new_arr
}

let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output);