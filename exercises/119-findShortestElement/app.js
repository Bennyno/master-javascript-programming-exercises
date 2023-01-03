function findShortestElement(arr) {
    // your code here
    if(arr.length == 0) {
        return ''
    }
    let short_e = '1000'
    for(w of arr){
        if(w.length < short_e.length) short_e = w
    }
    return short_e
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'