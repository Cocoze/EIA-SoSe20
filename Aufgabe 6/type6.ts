var emissionEuropa: number = 4209.3;
var gesamtemissionEuropa: number = 100 / (31116.5 / 4209.3);
var veränderungEuropa: number = ((4209.3 - 4965.7) / 4965.7) * 100;
var vergleichEuropa: number = 4209.3 - 4965.7;


function Europa() {

    document.querySelector("#titleRegion").innerHTML = "Europa";

    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionEuropa + "px")

    document.querySelector("#europa1").innerHTML = emissionEuropa;
    document.querySelector("#europa1text").innerHTML = "Emission absolute of Europe in 2018";

    document.querySelector("#europa2").innerHTML = gesamtemissionEuropa;
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";

    document.querySelector("#europa3").innerHTML = veränderungEuropa;
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#europa4").innerHTML = vergleichEuropa;
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
 

}


var emissionNordamerika: number = 6035.6;
var gesamtemissionNordamerika: number = 100 / (31116.5 / 6035.6);
var veränderungNordamerika: number = ((6035.6 - 6600.4) / 6600.4) * 100;
var vergleichNordamerika: number = 6035.6 - 6600.4;

function Nordamerika () {

    document.querySelector("#titleRegion").innerHTML = "Nordamerika";

    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionNordamerika + "px")

    document.querySelector("#europa1").innerHTML = emissionNordamerika;
    document.querySelector("#europa1text").innerHTML = "Emission absolute of northamerica in 2018";

    document.querySelector("#europa2").innerHTML = gesamtemissionNordamerika;
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";

    document.querySelector("#europa3").innerHTML = veränderungNordamerika;
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#europa4").innerHTML = vergleichNordamerika;
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";

}





var emissionSüdamerika: number = 1261.5;
var gesamtemissionSüdamerika: number = 100 / (31116.5 / 1261.5);
var veränderungSüdamerika: number = ((1261.5 - 1132.6) / 1132.6) * 100;
var vergleichSüdamerika: number = 1261.5 - 1132.6;

function Südamerika () {

    document.querySelector("#titleRegion").innerHTML = "Südamerika";

    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionSüdamerika + "px")

    document.querySelector("#europa1").innerHTML = emissionSüdamerika;
    document.querySelector("#europa1text").innerHTML = "Emission absolute of southamerica in 2018";

    document.querySelector("#europa2").innerHTML = gesamtemissionSüdamerika;
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";

    document.querySelector("#europa3").innerHTML = veränderungSüdamerika;
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#europa4").innerHTML = vergleichSüdamerika;
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";


}




var emissionAfrika: number = 1235.5;
var gesamtemissionAfrika: number = 100 / (31116.5 / 1235.5);
var veränderungAfrika: number = ((1235.5 - 1028) / 1028) * 100;
var vergleichAfrika: number = 1235.5 - 1028;

function Afrika () {

    document.querySelector("#titleRegion").innerHTML = "Afrika";

    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionAfrika + "px")

    document.querySelector("#europa1").innerHTML = emissionAfrika;
    document.querySelector("#europa1text").innerHTML = "Emission absolute of africa in 2018";

    document.querySelector("#europa2").innerHTML = gesamtemissionAfrika;
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";

    document.querySelector("#europa3").innerHTML = veränderungAfrika;
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#europa4").innerHTML = vergleichAfrika;
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";

}





var emissionAsien: number = 16274.1;
var gesamtemissionAsien: number = 100 / (31116.5 / 16274.1);
var veränderungAsien: number = ((16274.1 - 12954.7) / 12954.7) * 100;
var vergleichAsien: number = 16274.1 - 12954.7;

function Asien () {

    document.querySelector("#titleRegion").innerHTML = "Asien";

    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionAsien + "px")

    document.querySelector("#europa1").innerHTML = emissionAsien;
    document.querySelector("#europa1text").innerHTML = "Emission absolute of asia in 2018";

    document.querySelector("#europa2").innerHTML = gesamtemissionAsien;
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";

    document.querySelector("#europa3").innerHTML = veränderungAsien;
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#europa4").innerHTML = vergleichAsien;
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";


}




var emissionAustralien: number = 2100.5;
var gesamtemissionAustralien: number = 100 / (31116.5 / 2100.5);
var veränderungAustralien: number = ((2100.5 - 1993) / 1993) * 100;
var vergleichAustralien: number = 2100.5 - 1993;

function Australien () {

    document.querySelector("#titleRegion").innerHTML = "Australien";

    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionAustralien + "px")

    document.querySelector("#europa1").innerHTML = emissionAustralien;
    document.querySelector("#europa1text").innerHTML = "Emission absolute of australia in 2018";

    document.querySelector("#europa2").innerHTML = gesamtemissionAustralien;
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";

    document.querySelector("#europa3").innerHTML = veränderungAustralien;
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#europa4").innerHTML = vergleichAustralien;
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";

}

window.addEventListener("load", function() {
    document.querySelector(".europe").addEventListener ("click", Europa);
    document.querySelector(".northamerica").addEventListener ("click", Nordamerika);
    document.querySelector(".southamerica").addEventListener ("click", Südamerika);
    document.querySelector(".africa").addEventListener ("click", Afrika);
    document.querySelector(".asia").addEventListener ("click", Asien);
    document.querySelector(".australia").addEventListener ("click", Australien);
});
