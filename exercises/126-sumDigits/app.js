function sumDigits(num) {
    // your code here
    let numStr = num.toString()
    let val = 0;
    let sum = 0;
    while(numStr[val] != undefined){
        if(numStr[val] === '-'){
        let val2 = numStr[val] + numStr[val + 1]
        val2 = parseInt(val2);
        sum += val2;
        val +=2
        } else {
        sum += parseInt(numStr[val])
        val ++
        }
    }
    return sum
}
let output = sumDigits(316);
console.log(output); // --> 4