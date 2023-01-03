function getLengthOfLongestElement(arr) {
    // Your code here
    if(arr.length == 0) {
        return 0;
      }
      let word_size = 0;
      arr.map( w => w.length > word_size ? word_size = w.length: [])
      return word_size
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5