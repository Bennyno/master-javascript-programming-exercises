let obj = {
    person:"Rafael",
    lastName:"Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27,
}

function countNumberOfKeys(obj) {
    // your code here
    var objProperties = Object.keys(obj);
    return objProperties.length;
   
}
console.log(countNumberOfKeys(obj))


