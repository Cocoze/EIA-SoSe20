"use strict";
// Viel mit Markus im Praktikum bearbeitet
//Außerdem habe ich mich mit Fiona Virnich und Sara Voigt ausgtetauscht
var todosl = [{
        text: "Essen",
        isChecked: true
    },
    {
        text: "Sport",
        isChecked: false
    },
    {
        text: "Party",
        isChecked: false
    }
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
//var counterDOMElement: HTMLElement;
var counterTotalDOMElement;
var counterDoneDOMElement;
var counterOpenDOMElement;
window.addEventListener("load", function() {
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
    for (let index = 0; index < todosl.length; index++) {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todosl[index].isChecked + "'><i class='fas fa-check'></i></span>" +
            todosl[index].text +
            "<span class='trash fas fa-trash-alt'></span>";
        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function() {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function() {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }
    updateCounter();
}

function updateCounter() {
    counterTotalDOMElement.innerHTML = todosl.length + " in total";
    let counterChecked = 0;
    let counterOpen = 0;
    for (let i = 0; i < todosl.length; i++) {
        console.log(todosl[i].isChecked);
        if (todosl[i].isChecked == true) {
            counterChecked++;
        } else {
            counterOpen++;
        }
    }
    counterDoneDOMElement.innerHTML = counterChecked + " in done";
    counterOpenDOMElement.innerHTML = counterOpen + " in open";
}

function addTodo() {
    if (inputDOMElement.value != "") {
        // todosText.unshift(inputDOMElement.value);
        todosl.unshift({ text: inputDOMElement.value, isChecked: false });
    }
    inputDOMElement.value = "";
    drawListToDOM();
}

function toggleCheckState(index) {
    todosl[index].isChecked = !todosl[index].isChecked;
    drawListToDOM();
}

function deleteTodo(index) {
    //todosltext.splice(index, 1);
    //todoslisChecked.splice(index, 1);
    todosl.splice(index, 1);
    drawListToDOM();
}
window.addEventListener("load", function() {
    const artyom = new Artyom();
    artyom.addCommands({
        indexes: ["bitte hinzufügen *"],
        smart: true,
        action: function(i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard); //wildcard ist Platzhalter
            todosl.unshift({
                text: wildcard,
                isChecked: false
            });
            drawListToDOM();
        }
    });

    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function() {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function() {
                console.log("Ready!");
            });
        }, 150);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=function2.js.map