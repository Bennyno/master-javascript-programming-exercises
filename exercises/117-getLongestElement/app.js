function getLongestElement(arr) {
    // your code here
    if(arr.length == 0){
        return ''
    }
    let size = ''
    for(w of arr){
        if(w.length > size.length) size = w
    }
    return size
}
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'