class Person {
    name: String;
    constructor(name: string) {
        this.name = name;
    }
}

class Employe extends Person {
    empno: number;
    // super should be first in order
    constructor(empno: number, name: string) {
        super(name);
        this.empno = empno;
    }

    dispData(): void {
        console.log(this.empno);
        console.log(this.name);
    }

}

var emplo = new Employe(1, "name of emp");
emplo.dispData();

// inheritance and overriding

class Bank {
    rateOfInterest: number = 0;
    roi(): number {
        return this.rateOfInterest;
    }
}

class BankChild1 extends Bank {
    roi(): number { // we are overriding
        return 10.5;
    }
}

class BankChild2 extends Bank {
    roi(): number { // we are overriding
        return 12.5;
    }
}

console.log("bank parent roi: " + new Bank().roi()); //0
console.log("bank child 1 roi: " + new BankChild1().roi()); //10.5
console.log("bank child 2 roi: " + new BankChild2().roi()); //12.5



