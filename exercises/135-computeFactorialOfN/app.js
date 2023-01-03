function computeFactorialOfN(n) {
    // your code here
    let val = 1
    for(i = 1; i < n + 1; i++){ 
        val *= i
    }
    return val
}

let output = computeFactorialOfN(3); console.log(output); // --> 6

