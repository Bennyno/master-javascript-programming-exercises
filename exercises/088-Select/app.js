// Write your function here

function select(arr, obj) {
    let new_obj = {}
    arr.forEach((e)=>{
        if(obj[e]){
            new_obj[e] = obj[e]
        }
    })

    return new_obj
}

let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output);