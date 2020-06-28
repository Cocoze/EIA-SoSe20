"use strict";
//Ich habe mit Fiona Virnich zusammen gearbeitet
var anzahl = 4;
window.addEventListener("load", function () {
    document.querySelector(".fas fa-trash closer").addEventListener("click", function () { deleteTask(); });
    document.querySelector(".closer").addEventListener("click", function () { deleteTask(); });
    document.querySelector(".closer").addEventListener("click", function () { deleteTask(); });
    document.querySelector(".closer").addEventListener("click", function () { deleteTask(); });
});
function addElement() {
    var li = document.createElement("li"); //neue Zeile in Liste
    document.getElementById("element1").appendChild(li); //appendchild fügt neues "Kind" hinzu
    var checkbox = document.createElement("input"); //neue Checkbox hinzufügen
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    var inputValue = document.getElementById("inputFeld").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t); //Text von Eingabefeld wird hinzugefügt
    var icon = document.createElement("i");
    icon.className = "fas fa-trash";
    icon.classList.add("closer");
    icon.addEventListener("click", function () { deleteTask(anzahl); });
    li.appendChild(icon);
    anzahl++;
    zähler();
    //var txt = document.createTextNode("DELETE");
    //butt.appendChild(txt);
}
function deleteTask(task) {
    var element1 = document.getElementById("element1");
    if (element1.hasChildNodes()) {
        element1.removeChild(element1.childNodes[task]);
    }
    anzahl--;
    zähler();
}
function zähler() {
    var i = 0;
    document.getElementById("anzahl").innerText = anzahl + "zu erfüllende Tasks";
}
//# sourceMappingURL=functions.js.map