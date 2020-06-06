console.log("hallo");
window.addEventListener("load", function() {


var emissionEuropa: number = 4209.3;
var gesamtemissionEuropa: number = 100 / (31116.5 / 4209.3);
var veränderungEuropa: number = ((4209.3 - 4965.7) / 4965.7) * 100;
var vergleichEuropa: number = 4209.3 - 4965.7;

var emissionNordamerika: number = 6035.6;
var gesamtemissionNordamerika: number = 100 / (31116.5 / 6035.6);
var veränderungNordamerika: number = ((6035.6 - 6600.4) / 6600.4) * 100;
var vergleichNordamerika: number = 6035.6 - 6600.4;


var emissionSüdamerika: number = 1261.5;
var gesamtemissionSüdamerika: number = 100 / (31116.5 / 1261.5);
var veränderungSüdamerika: number = ((1261.5 - 1132.6) / 1132.6) * 100;
var vergleichSüdamerika: number = 1261.5 - 1132.6;


var emissionAfrika: number = 1235.5;
var gesamtemissionAfrika: number = 100 / (31116.5 / 1235.5);
var veränderungAfrika: number = ((1235.5 - 1028) / 1028) * 100;
var vergleichAfrika: number = 1235.5 - 1028;

var emissionAsien: number = 16274.1;
var gesamtemissionAsien: number = 100 / (31116.5 / 16274.1);
var veränderungAsien: number = ((16274.1 - 12954.7) / 12954.7) * 100;
var vergleichAsien: number = 16274.1 - 12954.7;


var emissionAustralien: number = 2100.5;
var gesamtemissionAustralien: number = 100 / (31116.5 / 2100.5);
var veränderungAustralien: number = ((2100.5 - 1993) / 1993) * 100;
var vergleichAustralien: number = 2100.5 - 1993;

function europa(): void {
    
    document.querySelector("#titleRegion").innerHTML = "Europe";
    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionEuropa + "px");

    document.querySelector("#europa1").innerHTML =  emissionEuropa.toString();
    document.querySelector("#europa1text").innerHTML = "Emission absolute of Europe in 2018";

    document.querySelector("#europa2").innerHTML = gesamtemissionEuropa.toFixed(2)  + "%";
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";

    document.querySelector("#europa3").innerHTML = veränderungEuropa.toFixed(2)  + "%";
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#europa4").innerHTML = vergleichEuropa.toFixed(2);
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
 

}
function Nordamerika (): void {

    document.querySelector("#titleRegion").innerHTML = "Nordamerika";

    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionNordamerika + "px")

    document.querySelector("#europa1").innerHTML = emissionNordamerika.toString();
    document.querySelector("#europa1text").innerHTML = "Emission absolute of Northamerica in 2018";

    document.querySelector("#europa2").innerHTML = gesamtemissionNordamerika.toFixed(2) + "%";
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";

    document.querySelector("#europa3").innerHTML = veränderungNordamerika.toFixed(2) + "%";
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#europa4").innerHTML = vergleichNordamerika.toFixed(2);
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";

}


function Südamerika (): void {

    document.querySelector("#titleRegion").innerHTML = "Südamerika";

    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionSüdamerika + "px")

    document.querySelector("#europa1").innerHTML = emissionSüdamerika.toString();
    document.querySelector("#europa1text").innerHTML = "Emission absolute of Southamerica in 2018";

    document.querySelector("#europa2").innerHTML = gesamtemissionSüdamerika.toFixed(2)  + "%";
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";

    document.querySelector("#europa3").innerHTML = veränderungSüdamerika.toFixed(2)  + "%";
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#europa4").innerHTML = vergleichSüdamerika.toFixed(2);
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";


}

function Afrika (): void {

    document.querySelector("#titleRegion").innerHTML = "Afrika";

    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionAfrika + "px")

    document.querySelector("#europa1").innerHTML = emissionAfrika.toString();
    document.querySelector("#europa1text").innerHTML = "Emission absolute of Africa in 2018";

    document.querySelector("#europa2").innerHTML = gesamtemissionAfrika.toFixed(2)  + "%";
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";

    document.querySelector("#europa3").innerHTML = veränderungAfrika.toFixed(2)  + "%";
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#europa4").innerHTML = vergleichAfrika.toFixed(2);
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";

}




function Asien (): void {

    document.querySelector("#titleRegion").innerHTML = "Asien";

    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionAsien + "px")

    document.querySelector("#europa1").innerHTML = emissionAsien.toString();
    document.querySelector("#europa1text").innerHTML = "Emission absolute of Asia in 2018";

    document.querySelector("#europa2").innerHTML = gesamtemissionAsien.toFixed(2)  + "%";
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";

    document.querySelector("#europa3").innerHTML = veränderungAsien.toFixed(2)  + "%";
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#europa4").innerHTML = vergleichAsien.toFixed(2);
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";


}

function Australien (): void {

    document.querySelector("#titleRegion").innerHTML = "Australien";

    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionAustralien + "px")

    document.querySelector("#europa1").innerHTML = emissionAustralien.toString();
    document.querySelector("#europa1text").innerHTML = "Emission absolute of Australia in 2018";

    document.querySelector("#europa2").innerHTML = gesamtemissionAustralien.toFixed(2)  + "%";
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";

    document.querySelector("#europa3").innerHTML = veränderungAustralien.toFixed(2)  + "%";
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#europa4").innerHTML = vergleichAustralien.toFixed(2);
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";

}
document.querySelector(".europe").addEventListener("click", europa);
document.querySelector(".northamerica").addEventListener("click", Nordamerika);
document.querySelector(".southamerica").addEventListener("click", Südamerika);
document.querySelector(".africa").addEventListener("click", Afrika);
document.querySelector(".asia").addEventListener("click", Asien);
document.querySelector(".australia").addEventListener("click", Australien);

});

