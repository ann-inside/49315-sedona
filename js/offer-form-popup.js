var btn_form = document.querySelector(".offer-form-btn-big");
var popup = document.querySelector(".offer-form-popup");
var close = document.querySelector(".offer-form-close");

btn_form.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("offer-form-popup-show");
});

close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("offer-form-popup-show");
}) 