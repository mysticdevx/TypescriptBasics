// variable declaration
var a = 5;
//a=6; error because b is constant
var b = 5;
b = 6;
//b="hello"; error because a is already defined as int and we can not change
var c = "hello"; //explicitly defining the variable type
//c=5; error, bc expects string
var d = 4; //explicitly defining the variable type
var e = false;
//array declaration
var list = [1, 2, 3];
var list5 = [1, 2, 3];
var list2 = [1, 2, 3];
var list3 = new Array;
// dynamic type declaration
var dynamic; // this acceot any type of variable
dynamic = 3;
dynamic = "hello";
dynamic = [1, 2];
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
// add elelemt
list.push(4);
// optional, union type
var values = ["apple", 2, "mango"];
var values2 = [1, 2, "mango"];
