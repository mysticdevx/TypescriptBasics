// create class
// to access from another file to create object, export it

export class classDemo {
    // properties, methods, constructor
    username: string;
    password: string;
    ssn: number;

    constructor(uname: string, pwd: string, sn: number) {
        console.log("i will execute first, i am the constructor");
        this.username = uname;
        this.password = pwd;
        this.ssn = sn;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    setUsername(uname: string) {
        this.username = uname;
    }

    getSSN() {
        return this.ssn;
    }

}

// below is to define and call from the same file without export import

//create object from class and use properties
// let classObject = new classDemo("my username before", "my password", 123);
// console.log("user name before: " + classObject.getUsername());
// classObject.setUsername("my username after");
// console.log("user name after: " + classObject.getUsername());
// console.log("pass: " + classObject.getPassword());
// console.log("ssn: " + classObject.getSSN());

//// another class
class Employee {

    // below constructor default gives values, even if not const used not problem
    constructor(eid: number = 0, ename: string = "null", deptNo: number = 0) {
        this.eid = eid;
        this.ename = ename;
        this.deptNo = deptNo;
    }

    eid: number;
    ename: string;
    deptNo: number;


    edisplay(): void {
        setTimeout(() => {
            console.log(this.eid);
            console.log(this.ename);
            console.log(this.deptNo);
        }, 2000);


    }

    setData(eid: number, ename: string, deptNo: number): void {
        this.eid = eid;
        this.ename = ename;
        this.deptNo = deptNo;
    }


}



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

