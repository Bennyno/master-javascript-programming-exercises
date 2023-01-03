// Write your function here

function keep(arr, n) {
    let new_arr = []

    arr.forEach(e => {
        if(e == n){
            new_arr.push(e)
        }
    });
    return new_arr
}

let output = keep([1, 2, 3, 2, 1], 2)
console.log(output);