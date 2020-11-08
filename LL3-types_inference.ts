let a1: string = "a";
let a2: number = 1;
let a3: boolean = false;
let a4: null;
let a5: undefined;
let a6: any;




//objects and functions

var animal = {
    name: "pitir",
    species: "cat",
    age: 1,
    speak: function () {
        console.log("meow!");
    }
}

function makeTheAnimalSpeak(animal) {
    animal.speak();
}

makeTheAnimalSpeak(animal);

//type inference

//even if I dont write the return type of function it finds it out, thats infetence
function calculateAge(birthYear: any): number {
    return Date.now() - birthYear;
}

// ts can not control writing errors unless we define the type name, 
// better to define the types from the beginning
// check y.lengh
function totalLength(x, y) {
    let total = x.length + y.lengt;
    return total;
}

function totalLength2(x: any[], y: string): number {
    let total: number = x.length + y.length;
    return total;
}


// union types
function totalLength3(x: (string | any[]), y: (string | any[])): number {
    var total: number = x.length + y.length;

    //accepts slice because slice is avaliable for both string and array
    x.slice(0);

    //below is error bc of type
    //x.push('abc');
    //x.substr(1);

    //for uncommon methods use instance of
    if (x instanceof Array) {
        x.push("abc");
    }

    if (typeof x === 'string') {
        x.substr(1);
    }

    //this is same with above
    if (x instanceof String) {
        x.substr(1);
    }
    return total;
}


// function overloads - not like java
// here behavior not changes. only combination of datatypes fixed
function totalLength4(x: string, y: string): number
function totalLength4(x: any[], y: any[]): number
function totalLength4(x: (string | any[]), y: (string | any[])): number {
    var total: number = x.length + y.length;

    x.slice(0);

    if (x instanceof Array) {
        x.push("abc");
    }

    if (x instanceof String) {
        x.substr(1);
    }
    return total;
}