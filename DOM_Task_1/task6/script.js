var btn = document.querySelector("button");
var body = document.body;

// State variable to track mode (assuming initial is Light)
var isDarkMode = false;

btn.addEventListener("click", function () {
    if (isDarkMode) {
        // Change to Light Mode
        body.style.backgroundColor = "white";
        body.style.color = "black";
        isDarkMode = false;
    } else {
        // Change to Dark Mode
        body.style.backgroundColor = "#282C33"; // Using the user's preferred dark color
        body.style.color = "white";
        isDarkMode = true;
    }
});
