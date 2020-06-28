"use strict";
//Ich habe mit Fiona Virnich zusammen gearbeitet
/* var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
 */
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
    //var txt = document.createTextNode("DELETE");
    //butt.appendChild(txt);
    li.appendChild(icon);
}
function deleteElement() {
    var element = document.getElementById("element1");
    element.parentNode.removeChild(li);
}
//# sourceMappingURL=functions.js.map