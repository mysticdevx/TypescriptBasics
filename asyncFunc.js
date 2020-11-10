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
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptNo);
    };
    Employee.prototype.setData = function (eid, ename, deptNo) {
        this.eid = eid;
        this.ename = ename;
        this.deptNo = deptNo;
    };
    return Employee;
}());
// function trigger(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("true");
//         },2000);
//     });
// }
console.log("\n******* emp1 *****");
var emp = new Employee();
emp.deptNo = 1;
emp.eid = 1;
emp.ename = "pitir";
console.log("employee info");
emp.edisplay();
console.log("\n******* emp2 *****");
var emp2 = new Employee();
emp2.setData(2, "adi", 2);
emp2.edisplay();
console.log("\n******* emp3 *****");
var emp3 = new Employee(3, "name3", 3);
emp3.edisplay();
