function getAllWords(str) {
    // your code here
    return str.length > 0 ? str.split(' ') : [];
}

let output = getAllWords('Radagast the Brown');
console.log(output);

