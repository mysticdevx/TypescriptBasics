//// another class
class Employee {

    // below constructor default gives values, even if not const used not problem
    constructor(eid:number=0,ename:string="null",deptNo:number=0){
        this.eid=eid;
        this.ename=ename;
        this.deptNo=deptNo;
    }

    eid: number;
    ename: string;
    deptNo: number;


    edisplay(): void {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptNo);
    }

    setData(eid:number,ename:string,deptNo:number):void{
        this.eid=eid;
        this.ename=ename;
        this.deptNo=deptNo;
    }
    

}
// function trigger(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("true");
//         },2000);
//     });
// }


 console.log("\n******* emp1 *****");



var emp = new Employee();
emp.deptNo=1;
emp.eid=1;
emp.ename="pitir";
console.log("employee info");
emp.edisplay();

console.log("\n******* emp2 *****");

var emp2 = new Employee();
emp2.setData(2,"adi",2);
emp2.edisplay();

console.log("\n******* emp3 *****");

var emp3 = new Employee(3, "name3", 3);
emp3.edisplay();

