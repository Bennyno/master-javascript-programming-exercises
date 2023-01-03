function search(array, value) {
  // your code here
  for(i =0; i<= array.length; i++){
    if(array[i] == value){
      return i
    } else if(array[i] == undefined) return null;
  }
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // => 4