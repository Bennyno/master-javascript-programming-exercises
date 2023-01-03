function getAllLetters(str) {
    // your code here
    var array = [];
    for (var i = 0; i < str.length; i++) {
       array.push(str[i]);
     }
     return array;
}

let output = getAllLetters('Radagast');
console.log(output); 