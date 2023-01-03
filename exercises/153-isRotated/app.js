function isRotated(str1, str2) {
    // your code here
    let fracc = str1.split('');
    let arr = [];
    for (let i of fracc) arr.push(str2.indexOf(i));
    let result = !arr.includes(-1);
    return result;
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false