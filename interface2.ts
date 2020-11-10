interface IEmployee{
    empName:string;
    empId:number;
    empSal:number;
    empCity?:string; // this means optional doesnt force.
    //defining as arrow func, takes no param, and returns void
    //dispData():()=>void;
    //shorter way
    dispEData:()=>void;
}

var empl:IEmployee={
    empName:"John",
    empId:101,
    empSal:50000,
    dispEData():void{
        console.log(this.empName+" "+this.empId+" "+this.empSal);
    }
}

console.log(empl.empName);
console.log(empl.empId);
console.log(empl.empSal);
empl.dispEData();