"use strict";
// Ich habe mir bei Sara Voigt Hilfe geholt
var todosText = ["Essen", "Sport", "Party"];
var todosChecked = [true, false, false];
var todos = [
    {
        text: "Essen", isChecked: true
    },
    {
        text: "Sport", isChecked: false
    },
    {
        text: "Party", isChecked: false
    }
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
//var counterDOMElement: HTMLElement;
var counterTotalDOMElement;
var counterDoneDOMElement;
var counterOpenDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterTotalDOMElement = document.querySelector("#counterTotal");
    counterDoneDOMElement = document.querySelector("#counterDone");
    counterOpenDOMElement = document.querySelector("#counterOpen");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    for (let index = 0; index < todosText.length; index++) {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todos[index].isChecked + "'><i class='fas fa-check'></i></span>"
            + todos[index].text +
            "<span class='trash fas fa-trash-alt'></span>";
        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
        todosDOMElement.appendChild(todo);
    }
    updateCounter();
}
function updateCounter() {
    counterTotalDOMElement.innerHTML = todos.length + " in total";
    let counterChecked = 0;
    let counterOpen = 0;
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i].isChecked);
        if (todos[i].isChecked == true) {
            counterChecked++;
        }
        else {
            counterOpen++;
        }
    }
    counterDoneDOMElement.innerHTML = counterChecked + " in done";
    counterOpenDOMElement.innerHTML = counterOpen + " in open";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        // todosText.unshift(inputDOMElement.value);
        todos.unshift({ text: inputDOMElement.value, isChecked: false });
    }
    inputDOMElement.value = "";
    drawListToDOM();
}
function toggleCheckState(index) {
    todos[index].isChecked = !todos[index].isChecked;
    drawListToDOM();
}
function deleteTodo(index) {
    todosText.splice(index, 1);
    todosChecked.splice(index, 1);
    todos.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=function2.js.map