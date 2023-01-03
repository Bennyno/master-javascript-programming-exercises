function countCharacter(str, char) {
    // your code here
    let res = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) { 
          res++; 
        }
    }
    return res;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output);
