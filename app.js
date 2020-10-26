"use strict";

let input = document.forms.taskForm;
let update = document.querySelector(".js-btn");
let taskListe = document.querySelector(".js-list");
let check = document.querySelectorAll(".form-check-input");
let liste;
let labelTask;
let inputTask;
let buttonTask;
let taskArray = [];

function task(e) {
    e.preventDefault();
    let userTask = input.taskInput.value;
    let addTask = taskArray.push(userTask);
    input.taskInput.value = "";
    console.log(taskArray)
}

function updateTask() {
    taskListe.innerHTML = "";
    for (let i = 0; i < taskArray.length; i++) {
        /*liste = document.createElement("li");
        taskListe.appendChild(liste);
        liste.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        labelTask = document.createElement("label");
        liste.appendChild(labelTask);
        labelTask.classList.add("flex-grow-1");
        inputTask = document.createElement("input");
        inputTask.classList.add("form-check-input", "mr-1");
        inputTask.setAttribute("type", "checkbox");
        inputTask.addEventListener("input", checkin);
        labelTask.appendChild(inputTask);
        console.log(inputTask)
        labelTask.innerHTML += taskArray[i];
        buttonTask = document.createElement("button");
        liste.appendChild(buttonTask);
        buttonTask.setAttribute("type", "button");
        buttonTask.classList.add("btn-close", "flex-shrink-0");*/

        liste = document.createElement("li");
        liste.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        taskListe.appendChild(liste);
        labelTask = document.createElement("label");
        labelTask.classList.add("flex-grow-1");
        liste.appendChild(labelTask);
        inputTask = document.createElement("input");
        inputTask.classList.add("form-check-input", "mr-1");
        inputTask.setAttribute("type", "checkbox");
        labelTask.appendChild(inputTask);
        let text = document.createTextNode(taskArray[i]);
        labelTask.appendChild(text);
        inputTask.addEventListener("input", checkin);
        buttonTask = document.createElement("button");
        buttonTask.setAttribute("type", "button");
        buttonTask.classList.add("btn-close", "flex-shrink-0");
        liste.appendChild(buttonTask);
        buttonTask.addEventListener("click", close);
    }    
}

function checkin(event) {
    let target = event.currentTarget;
    if(target.checked) {
        target.parentElement.classList.add("text-decoration-line-through");
   } else {
       target.parentElement.classList.remove("text-decoration-line-through");
   }
   console.log()
}

function close(event) {
    let target = event.currentTarget;
    target.parentElement.remove();
}

input.addEventListener("submit", task);
input.addEventListener("submit", updateTask);
