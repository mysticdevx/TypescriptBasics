var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
var todoA = {
    nameA: "pitir",
    state: TodoState.New
};
console.log(TodoState.Complete);
console.log(TodoState[3]);
// enums are used to define and access key and values interchangeably as static values.
/////// anonymous type - defining the simple interface in the definition of the variable
var todox;
//todox = { age: 41 }; // gives error because, it expects a name with the type of string
todox = { name: 'pitir' }; // this is ok.
// below union types can be done with anonymous
function totalLength5(x, y) {
    var total = x.length + y.length;
    return total;
}
// here anonymous
function totalLength6(x, y) {
    var total = x.length + y.length;
    return total;
}
totalLength6([1, 2], 'ali');
