var red = document.querySelector(".red");
var yellow = document.querySelector(".yellow");
var green = document.querySelector(".green");

var btnStop = document.querySelector("#stop");
var btnReady = document.querySelector("#ready");
var btnGo = document.querySelector("#go");

function resetLights() {
    red.style.backgroundColor = "#555";
    yellow.style.backgroundColor = "#555";
    green.style.backgroundColor = "#555";
}

btnStop.addEventListener("click", function () {
    resetLights();
    red.style.backgroundColor = "red";
});

btnReady.addEventListener("click", function () {
    resetLights();
    yellow.style.backgroundColor = "yellow";
});

btnGo.addEventListener("click", function () {
    resetLights();
    green.style.backgroundColor = "green";
});
