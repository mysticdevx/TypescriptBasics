var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    // super should be first in order
    function Employe(empno, name) {
        var _this = _super.call(this, name) || this;
        _this.empno = empno;
        return _this;
    }
    Employe.prototype.dispData = function () {
        console.log(this.empno);
        console.log(this.name);
    };
    return Employe;
}(Person));
var emplo = new Employe(1, "name of emp");
emplo.dispData();
// inheritance and overriding
var Bank = /** @class */ (function () {
    function Bank() {
        this.rateOfInterest = 0;
    }
    Bank.prototype.roi = function () {
        return this.rateOfInterest;
    };
    return Bank;
}());
var BankChild1 = /** @class */ (function (_super) {
    __extends(BankChild1, _super);
    function BankChild1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BankChild1.prototype.roi = function () {
        return 10.5;
    };
    return BankChild1;
}(Bank));
var BankChild2 = /** @class */ (function (_super) {
    __extends(BankChild2, _super);
    function BankChild2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BankChild2.prototype.roi = function () {
        return 12.5;
    };
    return BankChild2;
}(Bank));
console.log("bank parent roi: " + new Bank().roi()); //0
console.log("bank child 1 roi: " + new BankChild1().roi()); //10.5
console.log("bank child 2 roi: " + new BankChild2().roi()); //12.5
