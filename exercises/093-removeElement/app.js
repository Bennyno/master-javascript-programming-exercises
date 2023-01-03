// Write your function here
function removeElement(arr, n) {
    let new_arr = []

    for(i=0; i< arr.length; i++){
        if(arr[i] != n){
            new_arr.push(arr[i])
        }
    }
    return new_arr
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);