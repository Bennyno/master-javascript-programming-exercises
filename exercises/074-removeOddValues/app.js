function removeOddValues(obj) {
    // your code here
    for (var key in obj) {                          
        if (typeof obj[key] === 'number') {        
            if (obj[key] % 2 !== 0) {               
                delete obj[key];                    
            } else {
                obj[key];                           
            }                           
        }
    }
    return obj; 
}

let obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeOddValues(obj);
  console.log(obj);