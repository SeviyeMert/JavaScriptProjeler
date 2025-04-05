//Tüm elemanları seç

let form = document.querySelector("#todoAddForm");
let addInput = document.querySelector("#addInput");
let todoList = document.querySelector(".list-group");
let firstCardBody = document.querySelectorAll(".card-body")[0];
let secondCardBody = document.querySelectorAll(".card-body")[1];
let clearButton = document.querySelector("#clearButton");
let filterInput = document.querySelector("#todoSearch");

let todos=[];

runEvents();

function runEvents(){
    form.addEventListener("submit", addTodo);
}

function allTodosEverywhere() {
    
}

function removeTodoToUI(e){
    if(e.target.className==="fa fa-remove"){
         //Ekrandan Silme
         const todo = e.target.parentElement.parentElement;
         todo.remove();

         //Storage'dan Silme
         removeTodoToStorage(todo.textContent);
         showAlert("success","Todo başarıyla silindi.");
    }
}

function removeTodoToStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach(function(todo,index){
        if(removeTodo===todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function addTodo(e){
    let inputText = addInput.value.trim();
    if (inputText==null || inputText=="") {
        showAlert("warning","Lütfen boş bırakmayınız!");
    }else{
        addTodoToUI(inputText);
        addTodoStorage(inputText);
        showAlert("success","Todo Eklendi.");
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

function showAlert(type,message) {
    /*
    <div class="alert alert-warning" role="alert">
  This is a warning alert—check it out!
</div>
    */
   let div = document.createElement("div");
   // div.className="alert alert-"+type;
   div.className = `alert alert-${type}`; 
   div.textContent = message;

   firstCardBody.appendChild(div);

   setTimeout(function(){
        div.remove();
   }, 2500);
}