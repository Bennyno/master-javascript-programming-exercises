function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (var key in obj){
    if (obj[key].length > num ){
        delete obj[key];
        }
  }
  return obj;
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};
removeStringValuesLongerThan(6, obj);
console.log(obj);