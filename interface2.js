var empl = {
    empName: "John",
    empId: 101,
    empSal: 50000,
    dispEData: function () {
        console.log(this.empName + " " + this.empId + " " + this.empSal);
    }
};
console.log(empl.empName);
console.log(empl.empId);
console.log(empl.empSal);
empl.dispEData();
