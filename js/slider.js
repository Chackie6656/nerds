var slider = document.querySelector(".control");
var indicator1 = document.querySelector(".js-indicator1");
var indicator2 = document.querySelector(".js-indicator2");
var indicator3 = document.querySelector(".js-indicator3");
var slide1 = document.querySelector(".slide1");
var slide2 = document.querySelector(".slide2");
var slide3 = document.querySelector(".slide3");

slider.addEventListener("click", function (event) {
    if (indicator1.checked) {
        slide1.classList.add("js-slide-show");
        slide2.classList.add("js-slide-hide");
        slide3.classList.add("js-slide-hide");
        slide1.classList.remove("js-slide-hide");
        slide2.classList.remove("js-slide-show");
        slide3.classList.remove("js-slide-show");
    }
    
    if (indicator2.checked) {
        slide1.classList.add("js-slide-hide");
        slide2.classList.add("js-slide-show");
        slide3.classList.add("js-slide-hide");
        slide1.classList.remove("js-slide-show");
        slide2.classList.remove("js-slide-hide");
        slide3.classList.remove("js-slide-show");
    }
    
    if (indicator3.checked) {
        slide1.classList.add("js-slide-hide");
        slide2.classList.add("js-slide-hide");
        slide3.classList.add("js-slide-show");
        slide1.classList.remove("js-slide-show");
        slide2.classList.remove("js-slide-show");
        slide3.classList.remove("js-slide-hide");
    }
        
});