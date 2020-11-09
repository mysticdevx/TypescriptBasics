// function TodoService() {
//     this.todos = [];
// }
// TodoService.prototype.getAll = function() {
//     return this.todos;
// }
// var service = new TodoService();
// service.getAll();
// this above is prototype based inheritance in JS
var TodoService = /** @class */ (function () {
    function TodoService(todos) {
        this.todos = todos;
        this.todos = [];
    }
    TodoService.prototype.getAll = function () {
    };
    return TodoService;
}());
