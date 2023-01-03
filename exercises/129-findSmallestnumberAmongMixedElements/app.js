function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if(arr.length == 0){
    return 0
}
let new_arr = '1000'
let isNum = arr.find(e => typeof e == 'number')
if(isNum != undefined) {
    arr.map(e =>{ 
        if(e < new_arr){
            new_arr = e
        }
    })
} else{
return new_arr = 0
}
return new_arr
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4