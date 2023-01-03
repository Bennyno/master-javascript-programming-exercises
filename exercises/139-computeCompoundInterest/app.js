function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  let val=  1 + interestRate / compoundingFrequency
  let val2 = val **(compoundingFrequency*timeInYears) 
  let val3 = principal * val2
  return val3 - principal
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543