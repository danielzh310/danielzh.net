var app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
}

window.addEventListener("storage", function () {
    if (localStorage.lightMode == "dark") {
        app.setAttribute("light-mode", "dark");
    } else {
        app.setAttribute("light-mode", "light");
    }
}, false);