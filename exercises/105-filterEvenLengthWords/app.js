function filterEvenLengthWords(words) {
    // your code here
    new_arr= []
    words.map(w => w.length%2==0 ? new_arr.push(w) : [])
    return new_arr
}

let output = filterEvenLengthWords(['word', 'horse', 'car', 'computer']);
console.log(output); 