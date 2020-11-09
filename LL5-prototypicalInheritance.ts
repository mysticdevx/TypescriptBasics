// function TodoService() {
//     this.todos = [];
// }

// TodoService.prototype.getAll = function() {
//     return this.todos;
// }

// var service = new TodoService();
// service.getAll();

// this above is prototype based inheritance in JS

class TodoService{


constructor(private todos: Todo[]){
this.todos=[];
}

getAll(){

}

}

