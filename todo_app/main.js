let saveTodo = document.getElementById('saveTodo');


let todos = [];


window.addEventListener("DOMContentLoaded", (e) => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    renderTodos();
})

saveTodo.addEventListener('click', function (e) {
    let title = document.getElementById('createTodo').value;
    let todo = {
        title,
        completed: false,
        id: Date.now(),
        date: new Date(),
    };
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
})

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== parseInt(id));
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

function toggleTodo(id) {
    id = parseInt(id);
    todos = todos.map(todo => {
        if (todo.id === parseInt(id)) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}



function renderTodos() {
    let todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        let t = `<li class="todo${todo.completed ? " checked" : " "}">
        <label for="t-${todo.id}">
            <input type="checkbox"${todo.completed ? "checked" : ""} onchange="toggleTodo('${todo.id}')" id="t-${todo.id}">
            <span>${todo.title}</span>
            <br/>
            <span class="date"><b>Created At: ${todo.date}</b></span>
        </label>
        <button onclick="deleteTodo('${todo.id}')" class="delete">⌫</button>
    </li>`;
        todoList.innerHTML += t;
    })
}

