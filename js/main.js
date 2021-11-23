window.onload = function () {
    document.getElementById("save").addEventListener("click", addTodo);
    createHtml();
};
var Todo = /** @class */ (function () {
    function Todo(todo) {
        this.item = todo;
        this.done = false;
    }
    return Todo;
}());
var todos = [];
function addTodo() {
    var input = document.getElementById("todo");
    var newTodo = new Todo(input.value);
    todos.push(newTodo);
    input.value = "";
    createHtml();
}
function createHtml() {
    var todolist = document.getElementById("todolist");
    todolist.innerHTML = "";
    var _loop_1 = function (i) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        var markAsDoneButton = document.createElement("button");
        var removeButton = document.createElement("button");
        markAsDoneButton.innerHTML = "Markera som klar";
        markAsDoneButton.addEventListener("click", function () {
            todos[i].done = !todos[i].done;
            createHtml();
        });
        removeButton.innerHTML = "Ta bort";
        removeButton.className = "remove";
        removeButton.addEventListener("click", function () {
            todos.splice(i, 1);
            createHtml();
        });
        span.innerHTML = todos[i].item;
        if (todos[i].done) {
            span.className = "done";
            markAsDoneButton.innerHTML = "Markera som oklar";
        }
        li.appendChild(span);
        li.appendChild(markAsDoneButton);
        li.appendChild(removeButton);
        todolist.appendChild(li);
    };
    for (var i = 0; i < todos.length; i++) {
        _loop_1(i);
    }
}
