function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if(arr.length == 0){
        return 0
    }
    let new_arr = 0
    let isArr = arr.find(e => typeof e == "number")
    if(isArr != undefined) {
        arr.map(e =>{ 
            if(e > new_arr){
                new_arr = e
            }
        })
    } else{
    return new_arr = 0
    }
    return new_arr
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5