let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    var keys = Object.keys(obj2);

    for (var i = 0; i < keys.length; i++) {
        if (!(keys[i] in obj1)) {
            obj1[keys[i]] = obj2[keys[i]];
        }
    }
}

extend(obj1, obj2);

console.log(obj1); 
console.log(obj2);