function addToBackOfNew(arr, element) {
    // Write your function here
    let new_arr = [] 
    arr.forEach(e=>{
        new_arr.push(e);
    })
    new_arr.push(element)
    return new_arr;
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]