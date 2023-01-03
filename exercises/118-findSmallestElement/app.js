function findSmallestElement(arr) {
    // your code here
    if(arr.length == 0){
         return 0
    }
    let num = 1000
    for(n of arr){
        if(n < num) num = n
    }
    return num
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1