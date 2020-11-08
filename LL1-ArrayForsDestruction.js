//these are from ES6
//how to print all values
var array = [
    "pick up dry cleaning",
    "clean the garden",
    "help kids with their hw"
];
// for loop another way
for (var index in array) {
    var value = array[index];
    console.log(index + " : " + value);
    //console.log(`${index} => ${value}`);
}
// for each loop in java
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    //console.log(`${value}`);
    console.log(value);
}
//**  take a look at it **********************************************/
// destructing: array elements can be rachable by the defined names
var array2 = [123, "pickup materials", false];
var id = array2[0], title = array2[1], completed = array2[2];
//above code converting it to seperate variables in js
var id = array2[0], title = array2[1], completed = array2[2];
//best example
function getTodox(id) {
    var todox = {
        idx: 123,
        titlex: "clean the garden",
        completedx: false
    };
    return todox;
}
var _a = getTodox(123), idx = _a.idx, titlex = _a.titlex, completedx = _a.completedx;
///// add item to an array with push
var list4 = [1, 2, 3];
list4.push(4, 5);
console.log(list4.length);
console.log(list4);
// remove an item from array
//??
