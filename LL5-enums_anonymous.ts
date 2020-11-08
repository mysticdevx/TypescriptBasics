enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

//above means
// New = 1,
// Active =2,
// Complete =3,
// Deleted= 4

interface TodoA {
    nameA: String;
    state: TodoState;
}

var todoA: TodoA = {
    nameA: "pitir",
    state: TodoState.New
}

console.log(TodoState.Complete);
console.log(TodoState[3]);

// enums are used to define and access key and values interchangeably as static values.


/////// anonymous type - defining the simple interface in the definition of the variable
var todox: { name: string };

//todox = { age: 41 }; // gives error because, it expects a name with the type of string
todox = { name: 'pitir' }; // this is ok.

// below union types can be done with anonymous
function totalLength5(x: any[], y: string): number {
    let total: number = x.length + y.length;
    return total;
}
// here anonymous
function totalLength6(x: { length: number }, y: { length: number }): number {
    let total: number = x.length + y.length;
    return total;
}

totalLength6([1, 2], 'ali');