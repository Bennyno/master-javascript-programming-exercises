function findShortestWordAmongMixedElements(arr) {
    // your code here
    if(arr.length == 0){
        return ''
    }
    let new_arr = '1000'
    let isString = arr.find(e => typeof e == 'string')
    if(isString != undefined) {
        arr.map(e =>{ 
            if(e.length < new_arr){
                new_arr = e
            }
        })
    } else{
    return new_arr = ''
}
    return new_arr
}
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'