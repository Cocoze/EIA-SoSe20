// Ich habe mich mit Fiona Virnich ausgetauscht
var sound1 = new Audio("A.mp3");
var sound2 = new Audio("C.mp3");
var sound3 = new Audio("F.mp3");
var sound4 = new Audio("G.mp3");
var sound5 = new Audio("hihat.mp3");
var sound6 = new Audio("kick.mp3");
var sound7 = new Audio("laugh-1.mp3");
var sound8 = new Audio("laugh-2.mp3");
var sound9 = new Audio("snare.mp3");
window.addEventListener("load", function () {
    document.querySelector(".b1").addEventListener("click", function () { playsample(1); });
    document.querySelector(".b2").addEventListener("click", function () { playsample(2); });
    document.querySelector(".b3").addEventListener("click", function () { playsample(3); });
    document.querySelector(".b4").addEventListener("click", function () { playsample(4); });
    document.querySelector(".b5").addEventListener("click", function () { playsample(5); });
    document.querySelector(".b6").addEventListener("click", function () { playsample(6); });
    document.querySelector(".b7").addEventListener("click", function () { playsample(7); });
    document.querySelector(".b8").addEventListener("click", function () { playsample(8); });
    document.querySelector(".b9").addEventListener("click", function () { playsample(9); });
    document.querySelector(".play-button").addEventListener("click", playbeats);
});
function playsample(tonnr) {
    if (tonnr == 1) {
        sound1.play();
    }
    if (tonnr == 2) {
        sound2.play();
    }
    if (tonnr == 3) {
        sound3.play();
    }
    if (tonnr == 4) {
        sound4.play();
    }
    if (tonnr == 5) {
        sound5.play();
    }
    if (tonnr == 6) {
        sound6.play();
    }
    if (tonnr == 7) {
        sound7.play();
    }
    if (tonnr == 8) {
        sound8.play();
    }
    if (tonnr == 9) {
        sound9.play();
    }
}
function playbeats() {
    var index = 0;
    setInterval(function () {
        var beats = ["kick.mp3", "snare.mp3", "hihat.mp3"];
        var beat = new Audio(beats[index]);
        beat.play();
        index += 1;
        if (index > 2) {
            index = 0;
        }
    }, 900);
}
//# sourceMappingURL=drumtype.js.map