// Viel mit Markus im Praktikum bearbeitet
//Außerdem habe ich mich mit Fiona Virnich und Sara Voigt ausgtetauscht

//var todoslText: string[] = ["Essen" , "Sport" , "Party"];
//var todoslChecked: boolean[] = [true, false, false];


interface Todo {
    text: string;
    isChecked: boolean;
}

var todosl: Todo[] = [
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
var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
//var counterDOMElement: HTMLElement;
var counterTotalDOMElement: HTMLElement;
var counterDoneDOMElement: HTMLElement;
var counterOpenDOMElement: HTMLElement;


window.addEventListener("load", function (): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterTotalDOMElement = document.querySelector("#counterTotal");
    counterDoneDOMElement = document.querySelector("#counterDone");
    counterOpenDOMElement = document.querySelector("#counterOpen");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();

});



function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todosl.length; index++) {

        let todo: HTMLElement = document.createElement("div");

        todo.classList.add("todo");

        todo.innerHTML = "<span class='check " + todosl[index].isChecked + "'><i class='fas fa-check'></i></span>"

            + todosl[index].text +

            "<span class='trash fas fa-trash-alt'></span>";



        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function (): void {
            toggleCheckState(index);
        });

        todo.querySelector(".trash").addEventListener("click", function (): void {
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);

    }

    updateCounter();

}

function updateCounter(): void {
    counterTotalDOMElement.innerHTML = todosl.length + " in total";

    let counterChecked: number = 0;
    let counterOpen: number = 0;

    for (let i: number = 0; i < todosl.length; i++) {
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

function addTodo(): void {
    if (inputDOMElement.value != "") {
        // todosText.unshift(inputDOMElement.value);
        todosl.unshift({ text: inputDOMElement.value, isChecked: false });
    }
    inputDOMElement.value = "";

    drawListToDOM();

}

function toggleCheckState(index: number): void {
    todosl[index].isChecked = !todosl[index].isChecked;
    drawListToDOM();

}

function deleteTodo(index: number): void {


    //todosltext.splice(index, 1);
    //todoslisChecked.splice(index, 1);
    todosl.splice(index, 1);
    drawListToDOM();

}


declare var Artyom: any;

window.addEventListener("load", function (): void {
    const artyom: any = new Artyom();

    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard); //wildcard ist Platzhalter

            todosl.unshift({
                text: wildcard,
                isChecked: false

            });

            drawListToDOM();
        }
    });

    function startContinuousArtyom(): void {
        artyom.fatality();

        setTimeout(
            function (): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function (): void {
                    console.log("Ready!");
                });
            },
            250);
    }

    startContinuousArtyom();

});