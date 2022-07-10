//selectors

const todoInput = document.querySelector(".todo__input");
const todoButton = document.querySelector(".todo__button");
const todoList = document.querySelector(".todo__list");

//eventlisteners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", delteCheck);

//functions

function addTodo(event) {

    //prevents browser from refreshing page
    event.preventDefault();

    //create div for task
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("task");

    //create list-item
    const newTask = document.createElement("li");
    newTask.innerText = todoInput.value;
    newTask.classList.add("task__item");
    todoDiv.appendChild(newTask);

    //button to check task
    const completedButton = document.createElement("button");
    completedButton.innerText = "✓";
    completedButton.classList.add("button--completed");
    todoDiv.appendChild(completedButton);

    //button to delete task
    const deletedButton = document.createElement("button");
    deletedButton.innerText = "✗";
    deletedButton.classList.add("button--deleted");
    todoDiv.appendChild(deletedButton);

    //attach whole div to the todo-list
    todoList.appendChild(todoDiv);

    //clear input value after click
    todoInput.value = "";
}


function delteCheck(e) {
    const item = e.target;
    
    //delete
    if (item.classList[0] === "button--deleted") {
        const todo = item.parentElement;
        //adds animation to the remove process
        todo.classList.add("fall");
        // waits fro transition to end
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }

    //check
    if (item.classList[0] === "button--completed") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}