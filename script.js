// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Add event listener for dark mode button
document.addEventListener("DOMContentLoaded", () => {
    const darkModeButton = document.createElement("button");
    darkModeButton.innerText = "Toggle Dark Mode";
    darkModeButton.classList.add("dark-mode-btn");
    darkModeButton.onclick = toggleDarkMode;
    document.body.prepend(darkModeButton);
});
