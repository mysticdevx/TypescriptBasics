//04-01 interfaces with properties
var todo = {
    name: "pitir",
    completed: false
    // time is not compulsory
};
//casting to interface just FYI
var todo2 = {};
//the above two interfaces have same name but no overloading, both are accessible and active.
var $ = function (selector) {
    // Find DOM element
};
$.version = 1.18;
var container = $('#container');
$.fn.todo = function (todo) {
    if (todo) {
        $(this).data('todo', todo);
    }
    else {
        return $(this).data('todo');
    }
};
var todo3 = { name: "Pick up drycleaning" };
var container = $('#container');
container.data('todo', todo3);
var savedTodo = container.data('todo');
container.todo(todo);
