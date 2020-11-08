
//04-01 interfaces with properties

interface Todo {
    name: string;
    completed: boolean;
    time?: number; // by adding ? we make it optional
}

var todo: Todo = {
    name: "pitir",
    completed: false
    // time is not compulsory
};

//casting to interface just FYI
var todo2 = <Todo>{};

//defining behaviour in interface
// define the function by dropping the function keyword
interface ItodoService {
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
}



// below from the 04/02 chapter - interfaces with functions

interface jQuery {
    (selector: (string | any)): jQueryElement; // this defiens a function in interface, without function keyword
    fn: any;
    version: number;
}

interface jQueryElement {
    todo(): Todo;
    todo(todo: Todo): jQueryElement;
}

interface jQueryElement {
    data(name: string): any;
    data(name: string, data: any): jQueryElement;
}

//the above two interfaces have same name but no overloading, both are accessible and active.


var $ = <jQuery>function (selector: string) { //<jQuery> means casting 
    // Find DOM element
}

$.version = 1.18

var container = $('#container');

$.fn.todo = function(todo?: Todo): Todo {
    
    if(todo) {
        $(this).data('todo', todo);
    } else {
        return $(this).data('todo');
    }
    
}


var todo3 = { name: "Pick up drycleaning" };
var container = $('#container');
container.data('todo', todo3)
var savedTodo = container.data('todo');

container.todo(todo);







