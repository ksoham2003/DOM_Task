var btnLeft = document.querySelector("button:first-of-type");
var btnRight = document.querySelector("button:last-of-type");
var box = document.querySelector(".box");

// Initialize rotation to 0deg
var rotation = 0;
box.style.transform = `rotate(${rotation}deg)`;

btnRight.addEventListener("click", function () {
    rotation += 45;
    box.style.transform = `rotate(${rotation}deg)`;
});

btnLeft.addEventListener("click", function () {
    rotation -= 45;
    box.style.transform = `rotate(${rotation}deg)`;
});