function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let val = '1000000'
    if(word1.length < val.length) val = word1
    if(word2.length < val.length) val = word2
    if(word3.length < val.length) val = word3
    return val;
}
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'