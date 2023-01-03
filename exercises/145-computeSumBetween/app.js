function computeSumBetween(num1, num2) {
    // Your code here
    if(num1 > num2) return 0;
    let val = 0
    for(i = num1; i < num2; i++) val += i
    return val
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9