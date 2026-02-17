var p = document.querySelector("p");
var btnAdd = document.querySelector("button:first-of-type");
var btnSub = document.querySelector("button:last-of-type");

var counter = 0;

btnAdd.addEventListener("click", function () {
    counter++;
    p.textContent = counter;
});

btnSub.addEventListener("click", function () {
    if (counter > 0) {
        counter--;
        p.textContent = counter;
    }
});