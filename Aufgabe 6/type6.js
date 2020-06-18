"use strict";
console.log("hallo");
window.addEventListener("load", function () {
    var emissionEuropa = 4209.3;
    var gesamtemissionEuropa = 100 / (31116.5 / 4209.3);
    var veränderungEuropa = ((4209.3 - 4965.7) / 4965.7) * 100;
    var vergleichEuropa = 4209.3 - 4965.7;
    var emissionNordamerika = 6035.6;
    var gesamtemissionNordamerika = 100 / (31116.5 / 6035.6);
    var veränderungNordamerika = ((6035.6 - 6600.4) / 6600.4) * 100;
    var vergleichNordamerika = 6035.6 - 6600.4;
    var emissionSüdamerika = 1261.5;
    var gesamtemissionSüdamerika = 100 / (31116.5 / 1261.5);
    var veränderungSüdamerika = ((1261.5 - 1132.6) / 1132.6) * 100;
    var vergleichSüdamerika = 1261.5 - 1132.6;
    var emissionAfrika = 1235.5;
    var gesamtemissionAfrika = 100 / (31116.5 / 1235.5);
    var veränderungAfrika = ((1235.5 - 1028) / 1028) * 100;
    var vergleichAfrika = 1235.5 - 1028;
    var emissionAsien = 16274.1;
    var gesamtemissionAsien = 100 / (31116.5 / 16274.1);
    var veränderungAsien = ((16274.1 - 12954.7) / 12954.7) * 100;
    var vergleichAsien = 16274.1 - 12954.7;
    var emissionAustralien = 2100.5;
    var gesamtemissionAustralien = 100 / (31116.5 / 2100.5);
    var veränderungAustralien = ((2100.5 - 1993) / 1993) * 100;
    var vergleichAustralien = 2100.5 - 1993;
    function europa() {
        document.querySelector("#titleRegion").innerHTML = "Europe";
        document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionEuropa + "px");
        document.querySelector("#europa1").innerHTML = emissionEuropa.toString();
        document.querySelector("#europa1text").innerHTML = "Emission absolute of Europe in 2018";
        document.querySelector("#europa2").innerHTML = gesamtemissionEuropa.toFixed(2) + "%";
        document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
        document.querySelector("#europa3").innerHTML = veränderungEuropa.toFixed(2) + "%";
        document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
        document.querySelector("#europa4").innerHTML = vergleichEuropa.toFixed(2);
        document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    }
    function Nordamerika() {
        document.querySelector("#titleRegion").innerHTML = "Nordamerika";
        document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionNordamerika + "px");
        document.querySelector("#europa1").innerHTML = emissionNordamerika.toString();
        document.querySelector("#europa1text").innerHTML = "Emission absolute of Northamerica in 2018";
        document.querySelector("#europa2").innerHTML = gesamtemissionNordamerika.toFixed(2) + "%";
        document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
        document.querySelector("#europa3").innerHTML = veränderungNordamerika.toFixed(2) + "%";
        document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
        document.querySelector("#europa4").innerHTML = vergleichNordamerika.toFixed(2);
        document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    }
    function Südamerika() {
        document.querySelector("#titleRegion").innerHTML = "Südamerika";
        document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionSüdamerika + "px");
        document.querySelector("#europa1").innerHTML = emissionSüdamerika.toString();
        document.querySelector("#europa1text").innerHTML = "Emission absolute of Southamerica in 2018";
        document.querySelector("#europa2").innerHTML = gesamtemissionSüdamerika.toFixed(2) + "%";
        document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
        document.querySelector("#europa3").innerHTML = veränderungSüdamerika.toFixed(2) + "%";
        document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
        document.querySelector("#europa4").innerHTML = vergleichSüdamerika.toFixed(2);
        document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    }
    function Afrika() {
        document.querySelector("#titleRegion").innerHTML = "Afrika";
        document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionAfrika + "px");
        document.querySelector("#europa1").innerHTML = emissionAfrika.toString();
        document.querySelector("#europa1text").innerHTML = "Emission absolute of Africa in 2018";
        document.querySelector("#europa2").innerHTML = gesamtemissionAfrika.toFixed(2) + "%";
        document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
        document.querySelector("#europa3").innerHTML = veränderungAfrika.toFixed(2) + "%";
        document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
        document.querySelector("#europa4").innerHTML = vergleichAfrika.toFixed(2);
        document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    }
    function Asien() {
        document.querySelector("#titleRegion").innerHTML = "Asien";
        document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionAsien + "px");
        document.querySelector("#europa1").innerHTML = emissionAsien.toString();
        document.querySelector("#europa1text").innerHTML = "Emission absolute of Asia in 2018";
        document.querySelector("#europa2").innerHTML = gesamtemissionAsien.toFixed(2) + "%";
        document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
        document.querySelector("#europa3").innerHTML = veränderungAsien.toFixed(2) + "%";
        document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
        document.querySelector("#europa4").innerHTML = vergleichAsien.toFixed(2);
        document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    }
    function Australien() {
        document.querySelector("#titleRegion").innerHTML = "Australien";
        document.querySelector(".chart").setAttribute("style", "height:" + gesamtemissionAustralien + "px");
        document.querySelector("#europa1").innerHTML = emissionAustralien.toString();
        document.querySelector("#europa1text").innerHTML = "Emission absolute of Australia in 2018";
        document.querySelector("#europa2").innerHTML = gesamtemissionAustralien.toFixed(2) + "%";
        document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
        document.querySelector("#europa3").innerHTML = veränderungAustralien.toFixed(2) + "%";
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
//# sourceMappingURL=type6.js.map