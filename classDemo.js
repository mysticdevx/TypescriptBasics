"use strict";
// create class
// to access from another file to create object, export it
Object.defineProperty(exports, "__esModule", { value: true });
exports.classDemo = void 0;
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
exports.classDemo = classDemo;
// below is to define and call from the same file without export import
//create object from class and use properties
// let classObject = new classDemo("my username before", "my password", 123);
// console.log("user name before: " + classObject.getUsername());
// classObject.setUsername("my username after");
// console.log("user name after: " + classObject.getUsername());
// console.log("pass: " + classObject.getPassword());
// console.log("ssn: " + classObject.getSSN());
//// another class
var Employee = /** @class */ (function () {
    // below constructor default gives values, even if not const used not problem
    function Employee(eid, ename, deptNo) {
        if (eid === void 0) { eid = 0; }
        if (ename === void 0) { ename = "null"; }
        if (deptNo === void 0) { deptNo = 0; }
        this.eid = eid;
        this.ename = ename;
        this.deptNo = deptNo;
    }
    Employee.prototype.edisplay = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.eid);
            console.log(_this.ename);
            console.log(_this.deptNo);
        }, 2000);
    };
    Employee.prototype.setData = function (eid, ename, deptNo) {
        this.eid = eid;
        this.ename = ename;
        this.deptNo = deptNo;
    };
    return Employee;
}());
console.log("\n******* emp1 *****");
var emp = new Employee();
emp.deptNo = 1;
emp.eid = 1;
emp.ename = "pitir";
emp.edisplay();
console.log("\n******* emp2 *****");
var emp2 = new Employee();
emp2.setData(2, "adi", 2);
emp2.edisplay();
console.log("\n******* emp3 ******");
var emp3 = new Employee(3, "name3", 3);
emp3.edisplay();
