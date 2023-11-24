document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("theme-button");
    const body = document.body;

   
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

   
    themeButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

  
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
