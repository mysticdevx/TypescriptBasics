// spread operators are same with varargs in java
//the number of parameters are not predefined. see below

function add(...values) {
    let total = 0;
    for (var value of values) {
        total += value;

    }

    return total;
}

console.log(add(1, 2, 3));



let array3 = [1, 2, 3];

function calculate(action, ...values) {
    let total = 0;
    for (var value of values) {
        switch (action) {
            case 'add':
                total += value;
                break;
            case 'subtract':
                total -= value;
                break;
        }
    }

    return total;
}

console.log("add : " + calculate('add', 1, 2, 3));
console.log("subtract : " + calculate('subtract', 1, 2, 3));

// another use of spread operator

var source = [3, 4, 5];
var target = [1, 2, ...source, 6, 7];
console.log(target); //this prints [1,2,3,4,5,6,7]


//to concetatenate two arrays
var liste1 = [1, 2, 3];
var liste2 = [4, 5, 6];
Array.prototype.push.apply(liste1, liste2); // [1,2,3,4,5,6] = > this is ES5
console.log("liste 1: " + liste1);

//after es6
var liste3 = [1, 2, 3];
var liste4 = [4, 5, 6];
liste3.push(...liste4);
console.log("liste 3: " + liste3);

// use of spread with types
//when declaring with type we must give as array
function greetx(greetmsg: string, ...names: string[]) {
    return greetmsg + " " + names;
}
greetx("welcome", "a", "b", "ce"); //welcome a,b,ce

//while listing array with different joiner
var aa = [1, 2, 3];
console.log(aa.join(" - ")); // 1 - 2 - 3


