var box = document.querySelector(".box");
var btn = document.querySelector("button");

btn.addEventListener("click", function () {
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
});