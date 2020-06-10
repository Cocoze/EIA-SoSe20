var sound: HTMLAudioElement = new Audio("A.mp3");
sound.play();

window.addEventListener("load", function() {
    var sound: HTMLAudioElement = new Audio("A.mp3");
    sound.play();

    function playsample(): void {
document.querySelector(".play-button").setAttribute("style", "click");
document.querySelector(".play-button").addEventListener("load", playsample);
}
};