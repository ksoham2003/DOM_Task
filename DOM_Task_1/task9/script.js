var btn = document.querySelector("button");
var p = document.querySelector("p");

btn.addEventListener("click", function () {
    btn.textContent = "Clicked"; // Optional visual feedback on button
    p.textContent = "Button Clicked";

    // Disable the button to stop further clicks
    // Alternative: removeEventListener or set disabled attribute
    // User requirement: "Button should stop working after that"

    // Option 1: Disable button
    // btn.disabled = true;

    // Option 2: Remove listener (cleaner if we don't want disabled look)
    // But simplest way to ensure it stops working is disabling.
    // Let's use disabled attribute as it's standard for buttons.
    // However, style.css might not have disabled styles.
    // Let's just update text and maybe return early if already clicked?
    // No, disabling is better.

    btn.disabled = true;
});
