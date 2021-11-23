window.onload = function() {
    document.getElementById("lägg").addEventListener("click", addTodo);
    createHtml();
};
class Todo {
    constructor(todo){
        this.item = todo;
        this.done = false;
    }
}
let todos = [];
function addTodo() {
    let input = document.getElementById("todo");
    let newTodo = new Todo(input.value);
    todos.push(newTodo);
    input.value = "";
    createHtml();
}
function createHtml() {
    let todolist = document.getElementById("todolist");
    todolist.innerHTML = "";
    for(let i = 0; i < todos.length; i++){
        let li = document.createElement("li");
        let span = document.createElement("span");
        let markAsDoneButton = document.createElement("button");
        let removeButton = document.createElement("button");
        markAsDoneButton.innerHTML = "Markera som klar";
        markAsDoneButton.addEventListener("click", ()=>{
            todos[i].done = !todos[i].done;
            createHtml();
        });
        removeButton.innerHTML = "Ta bort";
        removeButton.className = "remove";
        removeButton.addEventListener("click", ()=>{
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
    }
}

//# sourceMappingURL=main.dfaa5ea5.js.map
