// Write your function here !
function computeAverageOfNumbers(arr) {
    if(arr.length == 0) {
        return 0;
    }
    new_arr=0
    for(i=0;i<arr.length;i++){
        new_arr += arr[i];
    }
    let avg = new_arr/arr.length
    return avg
}

let input = [1,2,3,4,5];
let output = computeAverageOfNumbers(input);
console.log(output);