
// variable declaration
const a = 5;
//a=6; error because b is constant

let b = 5;
b = 6;
//b="hello"; error because a is already defined as int and we can not change

let c: string = "hello"; //explicitly defining the variable type
//c=5; error, bc expects string

let d: number = 4; //explicitly defining the variable type

let e: boolean = false;


//array declaration
let list = [1, 2, 3];
let list5: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let list3 = new Array;

// dynamic type declaration
let dynamic: any; // this acceot any type of variable
dynamic = 3;
dynamic = "hello";
dynamic = [1, 2];

for (let i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i) }, 100 * i);
}

// add elelemt
list.push(4);

// optional, union type
var values: (string | number)[] = ["apple", 2, "mango"];
let values2: Array<string | number> = [1, 2, "mango"];

//while listing array with different joiner
var aaa = [1, 2, 3];
console.log(aaa.join(" - ")); // 1 - 2 - 3

