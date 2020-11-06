"use strict";
exports.__esModule = true;
var classDemo_1 = require("./classDemo");
var clsdm = new classDemo_1.classDemo("a", "b", 1);
console.log("user name before: " + clsdm.getUsername());
clsdm.setUsername("my username after");
console.log("user name after: " + clsdm.getUsername());
console.log("pass: " + clsdm.getPassword());
console.log("ssn: " + clsdm.getSSN());
function validate(value) {
    console.log(value);
}
validate("hi guys!");
// return type after the parameters, always right hand side
function increase(value) {
    return value + 1;
}
console.log(increase(4));
