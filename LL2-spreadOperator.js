// spread operators are same with varargs in java
//the number of parameters are not predefined. see below
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function add() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value = values_1[_a];
        total += value;
    }
    return total;
}
console.log(add(1, 2, 3));
var array3 = [1, 2, 3];
function calculate(action) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_2 = values; _a < values_2.length; _a++) {
        var value = values_2[_a];
        switch (action) {
            case 'add':
                total += value;
                break;
            case 'subtract':
                total -= value;
                break;
        }
    }
    return total;
}
console.log("add : " + calculate('add', 1, 2, 3));
console.log("subtract : " + calculate('subtract', 1, 2, 3));
// another use of spread operator
var source = [3, 4, 5];
var target = __spreadArrays([1, 2], source, [6, 7]);
console.log(target); //this prints [1,2,3,4,5,6,7]
//to concetatenate two arrays
var liste1 = [1, 2, 3];
var liste2 = [4, 5, 6];
Array.prototype.push.apply(liste1, liste2); // [1,2,3,4,5,6] = > this is ES5
console.log("liste 1: " + liste1);
//after es6
var liste3 = [1, 2, 3];
var liste4 = [4, 5, 6];
liste3.push.apply(liste3, liste4);
console.log("liste 3: " + liste3);
