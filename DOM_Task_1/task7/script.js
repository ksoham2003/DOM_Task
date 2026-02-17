var input = document.querySelector("input");
var p = document.querySelector("p");

input.addEventListener("input", function () {
    p.textContent = input.value;
});
