function or(expression1, expression2) {
  // your code here
  if (expression1 == true && expression2 == true) return true;
  else if(expression1 == false && expression2 == false) return false;
  else if(expression1 != expression2 )return true;
  else return false;
}

let output = or(true, false);
console.log(output);