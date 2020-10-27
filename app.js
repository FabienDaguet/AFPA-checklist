"use strict";

let input = document.forms.taskForm;
let update = document.querySelector(".js-btn");
let taskListe = document.querySelector(".js-list");
//let check = document.querySelectorAll(".form-check-input");
let taskArray = [];

function task(e) {
    e.preventDefault();
    let userTask = input.taskInput.value;
    taskArray.push(userTask);
    input.taskInput.value = "";
    console.log(taskArray)
    updateTask();
}

function updateTask() {
    taskListe.innerHTML = "";
    for (let i = 0; i < taskArray.length; i++) /* or for (task of taskArray) */{
        let liste = document.createElement("li");
        liste.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        taskListe.appendChild(liste);

        let labelTask = document.createElement("label");
        labelTask.classList.add("flex-grow-1");
        liste.appendChild(labelTask);

        let inputTask = document.createElement("input");
        inputTask.classList.add("form-check-input", "mr-1");
        inputTask.setAttribute("type", "checkbox");
        labelTask.appendChild(inputTask);

        let text = document.createTextNode(taskArray[i] /* or task */);
        labelTask.appendChild(text);

        inputTask.addEventListener("input", checkin);

        let buttonTask = document.createElement("button");
        buttonTask.setAttribute("type", "button");
        buttonTask.classList.add("btn-close", "flex-shrink-0");
        liste.appendChild(buttonTask);

        buttonTask.addEventListener("click", close);
    }    
}

function checkin(event) {
    let target = event.currentTarget;
    // target is not usefull
    if(target.checked) {
        target.parentElement.classList.add("text-decoration-line-through");
        // or event.currentTarget.closest("li").classList.add("text-decoration-line-through");
   } else {
       target.parentElement.classList.remove("text-decoration-line-through");
       //or event.currentTarget.closest("li").classList.remove("text-decoration-line-through");
   }
   console.log()
}

function close(event) {
    let target = event.currentTarget;
    target.parentElement.remove();
}

input.addEventListener("submit", task);
update.addEventListener("click", updateTask);
