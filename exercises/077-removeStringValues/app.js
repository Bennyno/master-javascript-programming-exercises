let obj = {
    name: 'Sam',
    age: 20
}

function removeStringValues(obj) {
    // your code here
    var objProperties = Object.keys(obj);
    for(let i=0; i<objProperties.length; i++)
    {   
      if(Object.prototype.toString.call(obj[objProperties[i]])==="[object String]")
         {
        delete obj[objProperties[i]];
         }
    }
  return obj;
}

removeStringValues(obj);
console.log(obj); // { age: 20 }
