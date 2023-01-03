function getLengthOfShortestElement(arr) {
    // your code here
    if(arr.length == 0){
        return 0
    }
    let size = 1000
    for(n of arr){
        if(n.length < size) size = n.length
    }
    return size
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3