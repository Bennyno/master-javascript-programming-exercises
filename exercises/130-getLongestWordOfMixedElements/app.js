function getLongestWordOfMixedElements(arr) {
    // your code here
    if(arr.length == 0){
        return ""
    }
    let new_arr = 0
    let isArr = arr.find(e => typeof e == "string")
    if(isArr != undefined) {
        arr.map(e =>{ 
            if(e.length > new_arr){
                new_arr = e
            }
        })
    } else{
    return new_arr = ""
    }
    return new_arr
    }

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'