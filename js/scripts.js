var button = document.querySelector(".btn-js");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".popup-close");

button.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("popup-show");
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("popup-show");
});