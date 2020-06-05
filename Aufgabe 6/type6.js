"use strict";
var emissionEuropa = 4209.3;
var gesamtemissionEuropa = 100 / (31116.5 / 4209.3);
var veränderungEuropa = ((4209.3 - 4965.7) / 4965.7) * 100;
var vergleichEuropa = 4209.3 - 4965.7;
var myElement = document.querySelector(".europe.png");
myElement.addEventListener("click", function () {
    function Europa() {
        var weltElement = document.querySelector("#titleRegion");
        weltElement.innerHTML = "Europa";
        weltElement = document.querySelector(".chart");
        document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionEuropa + "px");
        document.querySelector("#europa1").innerHTML = emissionEuropa.toString();
        document.querySelector("#europa1text").innerHTML = "Emission absolute of Europe in 2018";
        document.querySelector("#europa2").innerHTML = gesamtemissionEuropa.toString();
        document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
        document.querySelector("#europa3").innerHTML = veränderungEuropa.toString();
        document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
        document.querySelector("#europa4").innerHTML = vergleichEuropa.toString();
        document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    }
});
var emissionNordamerika = 6035.6;
var gesamtemissionNordamerika = 100 / (31116.5 / 6035.6);
var veränderungNordamerika = ((6035.6 - 6600.4) / 6600.4) * 100;
var vergleichNordamerika = 6035.6 - 6600.4;
function Nordamerika() {
    document.querySelector("#titleRegion").innerHTML = "Nordamerika";
    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionNordamerika + "px");
    document.querySelector("#europa1").innerHTML = emissionNordamerika.toString();
    document.querySelector("#europa1text").innerHTML = "Emission absolute of northamerica in 2018";
    document.querySelector("#europa2").innerHTML = gesamtemissionNordamerika.toString();
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#europa3").innerHTML = veränderungNordamerika.toString();
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#europa4").innerHTML = vergleichNordamerika.toString();
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
var emissionSüdamerika = 1261.5;
var gesamtemissionSüdamerika = 100 / (31116.5 / 1261.5);
var veränderungSüdamerika = ((1261.5 - 1132.6) / 1132.6) * 100;
var vergleichSüdamerika = 1261.5 - 1132.6;
function Südamerika() {
    document.querySelector("#titleRegion").innerHTML = "Südamerika";
    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionSüdamerika + "px");
    document.querySelector("#europa1").innerHTML = emissionSüdamerika.toString();
    document.querySelector("#europa1text").innerHTML = "Emission absolute of southamerica in 2018";
    document.querySelector("#europa2").innerHTML = gesamtemissionSüdamerika.toString();
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#europa3").innerHTML = veränderungSüdamerika.toString();
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#europa4").innerHTML = vergleichSüdamerika.toString();
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
var emissionAfrika = 1235.5;
var gesamtemissionAfrika = 100 / (31116.5 / 1235.5);
var veränderungAfrika = ((1235.5 - 1028) / 1028) * 100;
var vergleichAfrika = 1235.5 - 1028;
function Afrika() {
    document.querySelector("#titleRegion").innerHTML = "Afrika";
    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionAfrika + "px");
    document.querySelector("#europa1").innerHTML = emissionAfrika.toString();
    document.querySelector("#europa1text").innerHTML = "Emission absolute of africa in 2018";
    document.querySelector("#europa2").innerHTML = gesamtemissionAfrika.toString();
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#europa3").innerHTML = veränderungAfrika.toString();
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#europa4").innerHTML = vergleichAfrika.toString();
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
var emissionAsien = 16274.1;
var gesamtemissionAsien = 100 / (31116.5 / 16274.1);
var veränderungAsien = ((16274.1 - 12954.7) / 12954.7) * 100;
var vergleichAsien = 16274.1 - 12954.7;
function Asien() {
    document.querySelector("#titleRegion").innerHTML = "Asien";
    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionAsien + "px");
    document.querySelector("#europa1").innerHTML = emissionAsien.toString();
    document.querySelector("#europa1text").innerHTML = "Emission absolute of asia in 2018";
    document.querySelector("#europa2").innerHTML = gesamtemissionAsien.toString();
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#europa3").innerHTML = veränderungAsien.toString();
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#europa4").innerHTML = vergleichAsien.toString();
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
var emissionAustralien = 2100.5;
var gesamtemissionAustralien = 100 / (31116.5 / 2100.5);
var veränderungAustralien = ((2100.5 - 1993) / 1993) * 100;
var vergleichAustralien = 2100.5 - 1993;
function Australien() {
    document.querySelector("#titleRegion").innerHTML = "Australien";
    document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionAustralien + "px");
    document.querySelector("#europa1").innerHTML = emissionAustralien.toString();
    document.querySelector("#europa1text").innerHTML = "Emission absolute of australia in 2018";
    document.querySelector("#europa2").innerHTML = gesamtemissionAustralien.toString();
    document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
    document.querySelector("#europa3").innerHTML = veränderungAustralien.toString();
    document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#europa4").innerHTML = vergleichAustralien.toString();
    document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", Europa);
    document.querySelector(".northamerica").addEventListener("click", Nordamerika);
    document.querySelector(".southamerica").addEventListener("click", Südamerika);
    document.querySelector(".africa").addEventListener("click", Afrika);
    document.querySelector(".asia").addEventListener("click", Asien);
    document.querySelector(".australia").addEventListener("click", Australien);
});
//# sourceMappingURL=type6.js.map