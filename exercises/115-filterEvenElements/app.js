
function filterEvenElements(arr) {
    // your code here
    new_arr = []
    for(n of arr) {
        if(n % 2 == 0){
            new_arr.push(n)
        }
    }
    return new_arr
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
