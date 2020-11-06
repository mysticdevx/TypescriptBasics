import {classDemo} from './classDemo';




let clsdm = new classDemo("a","b",1);
console.log("user name before: " + clsdm.getUsername());
clsdm.setUsername("my username after");
console.log("user name after: " + clsdm.getUsername());
console.log("pass: " + clsdm.getPassword());
console.log("ssn: " + clsdm.getSSN());

//normally return type can be empty but better to give

function validate(value:string){
    console.log(value);
}

validate("hi guys!");

// return type after the parameters, always right hand side
function increase(value:number):number{
    return value+1;
}

console.log(increase(4));

//object declaration and access directly
let obj=
{
    color:"red",
    engine:1000
}
console.log(obj.color);
console.log(obj.engine);