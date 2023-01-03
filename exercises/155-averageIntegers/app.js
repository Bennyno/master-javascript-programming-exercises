function average(array_of_numbers) {
  // process array of numbers
  return sum(array_of_numbers)/array_of_numbers.length
}

function sum(numbers) {
    return numbers.reduce((a,b) => a+b, 0)
}


let result = average([2,4,5,7,10, 12,15])
console.log(result)