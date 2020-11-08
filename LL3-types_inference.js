var a1 = "a";
var a2 = 1;
var a3 = false;
var a4;
var a5;
var a6;
//objects and functions
var animal = {
    name: "pitir",
    species: "cat",
    age: 1,
    speak: function () {
        console.log("meow!");
    }
};
function makeTheAnimalSpeak(animal) {
    animal.speak();
}
makeTheAnimalSpeak(animal);
//type inference
//even if I dont write the return type of function it finds it out, thats infetence
function calculateAge(birthYear) {
    return Date.now() - birthYear;
}
// ts can not control writing errors unless we define the type name, 
// better to define the types from the beginning
// check y.lengh
function totalLength(x, y) {
    var total = x.length + y.lengt;
    return total;
}
function totalLength2(x, y) {
    var total = x.length + y.length;
    return total;
}
// union types
function totalLength3(x, y) {
    var total = x.length + y.length;
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
function totalLength4(x, y) {
    var total = x.length + y.length;
    x.slice(0);
    if (x instanceof Array) {
        x.push("abc");
    }
    if (x instanceof String) {
        x.substr(1);
    }
    return total;
}
