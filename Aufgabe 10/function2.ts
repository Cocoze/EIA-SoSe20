// Ich habe mir bei Sara Voigt Hilfe geholt
var todosText: string[] = ["Essen" , "Sport" , "Party"];
var todosChecked: boolean[] = [true, false, false];


interface Todo {
    text: string;
    isChecked: boolean;
}

var todos: Todo[] = [
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


window.addEventListener ("load", function(): void {

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

    for (let index: number = 0; index < todosText.length; index++) {

        let todo: HTMLElement = document.createElement("div");

        todo.classList.add("todo");
       
        todo.innerHTML =  "<span class='check " + todos[index].isChecked + "'><i class='fas fa-check'></i></span>"

        + todos[index].text +

        "<span class='trash fas fa-trash-alt'></span>";



        // Zuweisen der Event-Listener für den Check- und den Trash-Button

        todo.querySelector(".check").addEventListener("click", function(): void {

            toggleCheckState(index);

        });

        todo.querySelector(".trash").addEventListener("click", function(): void {

              deleteTodo(index);

        });



        // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.

        todosDOMElement.appendChild(todo);

    }



    updateCounter();

}



function updateCounter(): void {
 counterTotalDOMElement.innerHTML = todos.length + " in total";
 
 let counterChecked: number = 0;
 let counterOpen: number = 0;

 for (let i: number = 0; i < todos.length; i++) {
     console.log(todos[i].isChecked);

    if (todos[i].isChecked == true) {
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
            todos.unshift({text: inputDOMElement.value, isChecked: false});
          
    }
                
            inputDOMElement.value = "";

        drawListToDOM();

    }

function toggleCheckState(index: number): void {

    todos[index].isChecked = !todos[index].isChecked;

    drawListToDOM();

}


function deleteTodo(index: number): void {


    todosText.splice(index, 1);
    todosChecked.splice(index, 1);
    todos.splice(index, 1); 
    drawListToDOM();

}