'use strict'

const todoControl = document.querySelector(".todo-control"),
    headerInput = document.querySelector(".header-input"),
    todoList = document.querySelector(".todo-list"),
    todoCompleted = document.querySelector(".todo-completed"),
    todoRemove = document.querySelectorAll(".todo-remove"),
    todoItems = document.querySelectorAll(".todo-item");

let todoData = [
];

const render = function(){

    todoList.textContent = "";
    todoCompleted.textContent = "";

    todoData.forEach(function(item){
        const li = document.createElement("li");
        li.classList.add("todo-item")

        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + 
            '<div class="todo-buttons">' + 
                '<button class="todo-remove"></button>' + 
                '<button class="todo-complete"></button>' + 
            '</div>';

        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        };


        const btnTodoComplete = li.querySelector(".todo-complete");

        btnTodoComplete.addEventListener("click", function(){
            item.completed = !item.completed;
            render();
        });
//5) Удаление дел на кнопку КОРЗИНА
        const btnTodoRemove = li.querySelector(".todo-remove");

        btnTodoRemove.addEventListener("click", function(){
            li.remove()
        })


    });
};

todoControl.addEventListener("submit", function(event){
    event.preventDefault();

    let newTodo = {
        value: headerInput.value,
        completed: false
    };

//3) Пустые дела добавляться не должны
    if (newTodo.value !== "") {
        todoData.push(newTodo);
    }
//4) Поле ввода после добавления дела должно очищаться
    headerInput.value = "";
// 6) Сохранять данные о делах в localStorage (советую в виде массива)
    let arr = [];
    let task = JSON.stringify(newTodo);
    arr.push(task);
    localStorage.setItem("text", arr);
    
    

    
    // JSON.parse(localStorage.getItem("task"))
   
    
    
    render();
});



render();
