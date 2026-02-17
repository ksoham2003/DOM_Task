var box = document.querySelector(".box");
var btn = document.querySelector("button");

btn.addEventListener("click", function () {
    if (box.style.backgroundColor === "red") {
        box.style.backgroundColor = "green";
    } else if (box.style.backgroundColor === "green") {
        box.style.backgroundColor = "blue";
    } else {
        box.style.backgroundColor = "red";
    }
});