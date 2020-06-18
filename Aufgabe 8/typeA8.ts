// Ich habe mit Fiona Virnich zusammengearbeitet

window.addEventListener("load", function () {
    document.querySelector(".b1").addEventListener("click", function () { playsample("A.mp3"); });
    document.querySelector(".b2").addEventListener("click", function () { playsample("C.mp3"); });
    document.querySelector(".b3").addEventListener("click", function () { playsample("F.mp3"); });
    document.querySelector(".b4").addEventListener("click", function () { playsample("G.mp3"); });
    document.querySelector(".b5").addEventListener("click", function () { playsample("hihat.mp3"); });
    document.querySelector(".b6").addEventListener("click", function () { playsample("kick.mp3"); });
    document.querySelector(".b7").addEventListener("click", function () { playsample("laugh-1.mp3"); });
    document.querySelector(".b8").addEventListener("click", function () { playsample("laugh-2.mp3"); });
    document.querySelector(".b9").addEventListener("click", function () { playsample("snare.mp3"); });
    document.querySelector("#playbutton").addEventListener("click", playnstop);
    document.querySelector("#deletebutton").addEventListener("click", deletebeat);
    document.querySelector("#recordbutton").addEventListener("click", recordBeat);

});

//hier wird die Id von dem Beatinterval reingeschrieben
let beatInterval: number = undefined;

//abfolge des beats
let beats: string[] = ["kick.mp3", "snare.mp3", "hihat.mp3"];

//Wird gerade aufgenommen?
let recording: boolean = false;

//Ändern des aufnahmezustands (auf das Mikrofon klicken)
function recordBeat(): void {
    if (recording) {
        recording = false;
    }
    else {
        recording = true;
    }
}


//Dateiname wird als Parameter übergeben und abgespielt
function playsample(mp3FileName: string): void {
    if (recording) {
        //wenn aufgenommen wird, wird dateiname an Beat Array angefügt
        beats.push(mp3FileName);
    }
    const sound: HTMLAudioElement = new Audio(mp3FileName);
    sound.play();
}


function playnstop(): void {
    let playstopButton = document.querySelector("#playbutton");

    if (playstopButton.className == "fas fa-play play-button") {
        playstopButton.className = "fas fa-stop play-button";
        playbeats();
    } else {
        playstopButton.className = "fas fa-play play-button";
        clearInterval(beatInterval);
    }
}

function deletebeat() {
    beats = [];
}

function playbeats() {
    var index: number = 0;
    beatInterval = setInterval(function () {
        playsample(beats[index]);
        index += 1;
        if (index >= beats.length) {
            index = 0;
        }
    }, 900);
}