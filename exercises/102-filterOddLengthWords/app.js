function filterOddLengthWords(words) {
    // your code here
    if(words.length == 0 || words.length%2!=0){
        return []
    }
    return words.filter((item) => item.length % 2 !== 0)
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); 