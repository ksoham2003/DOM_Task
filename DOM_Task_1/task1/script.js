var p = document.querySelector("p");
var btn = document.querySelector("button");

btn.addEventListener("click", function () {
    if (p.textContent === "Hello") {
        p.textContent = "Welcome";
    } else {
        p.textContent = "Hello";
    }
});
