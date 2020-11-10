//************** Named Functions ***/
function display() {
    console.log("Welcome to TypeScript!");
}

display(); //Output: Welcome to TypeScript 

//Named Function include parameter types and return type.
function Sumx(x: number, y: number) : number {
    return x + y;
}

console.log(Sumx(2,3)); // returns 5





//**************  Anonymous Function ***/
var greeting = function() {
    console.log("Welcome to TypeScript!");
};

greeting(); //Output: Hello TypeScript! 

//Anonymous Function include parameter types and return type.
var Sum = function(x: number, y: number) : number
{
    return x + y;
}

console.log(Sum(2,3)); // returns 5



//**************    Function Parameters  ****/
function Greety(greeting: string, name: string ) : string {
    return greeting + "  " + name;
}

console.log(Greety('Welcome','John'));//OK, returns "Welcome John!"
//console.log(Greety('Welcome')); // Compiler Error: Expected 2 arguments, but got 1.
//console.log(Greety('Welcome','John','Smith')); //Compiler Error: Expected 2 arguments, but got 3.

//Optional Parameters
function Greetz(greeting: string, name?: string ) : string {
    return greeting + "  " + name;
}

console.log(Greetz('Welcome','John'));//OK, returns "Welcome John!"
console.log(Greetz('Welcome')); // OK, returns "Welcome undefined!".
//console.log(Greetz('Welcome','John','Smith')); //Compiler Error: Expected 2 arguments, but got 3.

//Default Parameters
function Greetk(name: string, greeting: string = "Hello") : string {
    return greeting + "  " + name;
}

console.log(Greetk('John'));//OK, returns "Welcome John!"
console.log(Greetk('John', 'Welcome')); // OK, returns "Welcome John!".
console.log(Greetk('Smith')); //OK, returns "Hello Smith!"


/// arrow functions ***********************************

//**  Fat Arrow Function */
let sumk = (x: number, y: number): number => {
    return x + y;
}

console.log(sumk(10, 20)); //returns 30

//* Parameterless Arrow Function
var Print = () => 
{
    console.log("Hello TypeScript");
}

// var Print = () => console.log("Hello TypeScript");     //same as above

Print(); //Output: Hello TypeScript

//if the function body consists of only one statement 
//then no need for the curly brackets and the return keyword

var sum = (x: number, y: number) => x + y;

console.log(sum(3, 4)); //returns 7



/////  overload functions *******************************************

// function add(a:number, b:number): number;
// function add(a:string, b:string): string;

// function add(a:any,b:any):any
// {
//     return a+b;
// }


// console.log(add(100,200));//300
// console.log(add("WELCOME","JOHN")); //WELCOMEJOHN

//** Function overloading with different number of parameters and types
// with same name is not supported.

function disp(a:string, b:string):void
{
    console.log(a+b);
}

// below gives error because of the same name. not like java.
// function disp(a:number):void
// {
//     console.log(a);
// }