//Tüm elemanları seç

let form = document.querySelector("#todoAddForm");
let addInput = document.querySelector("#addInput");
let todoList = document.querySelector(".list-group");
let firstCardBody = document.querySelectorAll(".card-body")[0];
let secondCardBody = document.querySelectorAll(".card-body")[1];
let clearButton = document.querySelector("#clearButton");

let todos=[];

runEvents();

function runEvents(){
    form.addEventListener("submit", addTodo);
}

function addTodo(e){
    let inputText = addInput.value.trim();
    if (inputText==null || inputText=="") {
        alert("Lütfen bir değer giriniz!");
    }else{
        addTodoToUI(inputText);
        addTodoStorage(inputText);
    }
    e.preventDefault();
}

function addTodoToUI(newTodo) {  //Arayüze bir todo ekle demek.
     /*
<li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>
                        */
    let li = document.createElement("li");
    li.className="list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    let a =document.createElement("a");
    a.href="#";
    a.className="delete-item";

    let i =document.createElement("i");
    i.className="fa fa-remove";
    
    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);
}

function addTodoStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function checkTodosFromStorage() {
    if (localStorage.getItem("todos")===null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}