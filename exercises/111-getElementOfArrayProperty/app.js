let obj = {
    key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if(!obj[key]|| !Array.isArray(obj[key]) || obj[key].length == 0) {
        return undefined;
      }
    if(obj[key][index]) {
        return obj[key][index]
    }  
}

let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output);