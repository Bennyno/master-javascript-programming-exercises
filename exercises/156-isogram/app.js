function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set 
  const chars = {};
  for (const char of text) {
    chars[char] = (chars[char] || 0) + 1;
  }
  let result = Object.entries(chars)
    .filter((char) => char[1] > 1)
    .map((char) => char[0]);
  if (result.length > 0) return false;
  else return true;
}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false