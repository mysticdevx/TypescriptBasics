// create class
var classDemo = /** @class */ (function () {
    function classDemo(uname, pwd, sn) {
        console.log("i will execute first, i am the constructor");
        this.username = uname;
        this.password = pwd;
        this.ssn = sn;
    }
    classDemo.prototype.getUsername = function () {
        return this.username;
    };
    classDemo.prototype.getPassword = function () {
        return this.password;
    };
    classDemo.prototype.setUsername = function (uname) {
        this.username = uname;
    };
    classDemo.prototype.getSSN = function () {
        return this.ssn;
    };
    return classDemo;
}());
//create object from class and use properties
var classObject = new classDemo("my username before", "my password", 123);
console.log("user name before: " + classObject.getUsername());
classObject.setUsername("my username after");
console.log("user name after: " + classObject.getUsername());
console.log("pass: " + classObject.getPassword());
console.log("ssn: " + classObject.getSSN());
